from PIL import Image
import json
import base64
import io
import requests
# import imgbbpy
import openai
import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

openai.api_key = os.environ['OPENAI_API_KEY']

hasTopic = False

def stable_diffusionAPI(prompt, image_selection=False):
    negative='''NSFW, Cleavage, Pubic Hair, Nudity, Naked, \
        Text, censored, deformed, bad anatomy, disfigured, \
        poorly drawn face, mutated, extra limb, ugly, poorly drawn \
        hands, missing limb, floating limbs, disconnected limbs, \
        disconnected head, malformed hands, long neck, mutated hands \
        and fingers, bad hands, missing fingers, cropped, bad quality, \
        low quality, mutation, huge calf, bad hands, fused \
        hand, missing hand, disappearing arms, disappearing thigh, disappearing \
        calf, disappearing legs, missing fingers, fused fingers, abnormal eye \
        proportion, Abnormal hands, abnormal legs, abnormal feet,  abnormal fingers'''

    api_call = {
        "enable_hr": False,
            "denoising strength": 0,
            "firstphase_width": 0,
            "firstphase_height": 0,
            "prompt": prompt,
            "seed": -1,
            "subseed": -1,
            "subseed_strength": 0,
            "seed_resize_from_h": -1,
            "seed_resize_from_w": -1,
            "batch_size": 1,
            "n_iter": 1,
            "steps": 30,
            "cfg_scale": 8,
            "width": 512,
            "height": 512,
            "restore_faces": True,
            "tiling": False,
            "negative_prompt": negative,
            "eta": 0,
            "s_churn": 0,
            "s_tmax": 0,
            "s_tmin": 0,
            "s_noise": 1,
            "sampler_index": "Euler a",
    }

    if image_selection:
        tempimage = open(f"images\output.png", "rb").read()
        base64image = base64.b64encode(tempimage).decode("utf-8")
        api_call['alwayson_scripts'] = {
                "controlnet": {
                    "args":[
                        {
                            "input_image": base64image,
                            "module": "canny",
                            "model": "control_v11e_sd15_ip2p [c4bb465c]",
                            "weight": 1.3,
                            "processor_res": 512,
                            "threshold_a": 90,
                            "threshold_b": 180,
                            "guidance_start": 0.0,
                            "guidance_end": 0.15,
                            "control_mode": 2
                        }
                    ]
                }
            }

    

    response = requests.post(
        "https://71b23ecd50cf50a837.gradio.live/sdapi/v1/txt2img",
        json=api_call
    )
    i = response.json()["images"][0]
    image = Image.open(io.BytesIO(base64.b64decode(i.split(",", 1)[0])))
    image.save(f"Images\output.png", "PNG")

    return i
    # client = imgbbpy.SyncClient(os.environ["IMGBB_KEY"])
    # imageout = client.upload(file=f"images\output{image_counter}.png")
    # image_counter += 1
    # return imageout.url

delimiter = "####"
system_message = """
You are a customer service assistant for a fundraiser company\
 that raises funds through minting NFTs.\
 The query of the customer will be delimited with\
 {delimiter} characters.

 Check each query for Image generation\
 or Normal Conversation. 

 If the query is not an Image generation query\
 then set the imageflag as false and\
 give appropriate answer as response.\
 
 If the query is a Image generation query then set the\
 imageflag as true and in response only give text that\
 will be used prompt for the image generation model,\
 For example the response to "image of starwars" would\
 be "starwars" and the response to "image of painting"\
 would be "painting".\

 If the imageflag is true determine whether the user wants\
 to change the last given image, if yes then set lastimage to true.\
 
 Determine the topic of the chat and give the topic in max\
 8 words based on the query.\

 For each query provide output in json format with the\
 keys: imageflag, lastimage, topic, and response.\
 
 
"""

messages = [
    {"role": "system", "content": system_message}
]

def chatGPTAPI(prompt):
    moderation_flag = openai.Moderation.create(input=prompt)["results"][0]["flagged"]
    if moderation_flag:
        return {"imageflag": False, "lastimage": False,
                "topic":"",
                "response":"Sorry, I am an AI fashion outfit generator. I unable to respond to that request.", 
                }
    else:
        messages.append({"role": "user", "content": f'{delimiter}{prompt}{delimiter}'})
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0,
            max_tokens=500
        )
        messages.append({"role": "assistant", "content": response.choices[0].message["content"]})
        conversation_json = json.loads(response.choices[0].message["content"])
        return conversation_json

def getChat(prompt):
    global hasTopic
    conversation = chatGPTAPI(prompt)
    print(conversation)
    if conversation["imageflag"]:
        prompt_SD = f'{conversation["response"]}, artistic'
        if conversation['lastimage']:
            return {"image": True,
                    "output": f'data:image/png;base64,{stable_diffusionAPI(prompt_SD, True)}'}
        return {"image": True, 
                "output": f'data:image/png;base64,{stable_diffusionAPI(prompt_SD)}'}
    if not hasTopic:
        hasTopic = True
        return {"image": False, "output": conversation["response"], "topic": conversation["topic"]}
    return {"image": False, "output": conversation["response"]}