import React, { useReducer, createContext } from 'react'
import Chat from './Chat'
import ChatInput from './ChatInput'
import axios from 'axios'

export const ChatbotContext = createContext()

const initialState = {
  prompt: "",
  messages: [{ image: false, output: 'Hi, how can I help you ?', type: 'SYSTEM' }]
}

export const SYSTEM = 'SYSTEM'
export const USER = 'USER'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_IMAGE = 'ADD_IMAGE'
export const CHANGE_PROMPT = 'CHANGE_PROMPT'

const reducer = (state, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      let text = action.payload.output
      let type = action.payload.type
      return { ...state, messages: [...state.messages, { image: false, output: text, type }] }

    case ADD_IMAGE:
      let output = action.payload.output
      return { ...state, messages: [...state.messages, { image: true, output, type: SYSTEM }] }


    case CHANGE_PROMPT:
      let prompt = action.payload.prompt
      return { ...state, prompt }

    default:
      throw new Error(`Action ${action.type} not found`)
  }
}

const ImageGenAI = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ADD_MESSAGE, payload: { output: state.prompt, type: USER } })
    dispatch({ type: CHANGE_PROMPT, payload: { prompt: "" } })
    axios.post("http://localhost:5000/getchat", { prompt: state.prompt })
      .then(res => {
        if (res.data.image==true) {
          dispatch({ type: ADD_IMAGE, payload: { ...res.data, type: SYSTEM } })
        }
        else dispatch({ type: ADD_MESSAGE, payload: { ...res.data, type: SYSTEM } })
        console.log(state.messages)
      })
  }

  return (
    <ChatbotContext.Provider value={{ stateContext: state, dispatchContext: dispatch, handleSubmit }}>
      <h1 className='text-2xl text-accent-content font-bold'>Chatbot</h1>
      <div className="flex flex-col w-full h-[76vh] pb-2 mt-5">
        <div className=" h-full overflow-y-scroll">
          {state.messages.map((message, index) => (
            <Chat key={index} {...message} />
          ))}
        </div>
        <ChatInput />
      </div>
    </ChatbotContext.Provider>
  )
}

export default ImageGenAI