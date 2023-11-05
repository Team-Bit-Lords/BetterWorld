/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import sendPrompt from "../assets/sendPrompt.svg";
import chatHistory from "../assets/chatHistory.svg";
import axios from "axios";
import "./ChatbotUI.css";
import Navbar from "../components/common/Navbar";


const Generate = () => {
    const [topic, setTopic] = useState("New Chat");
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([{}]);
    const imgRef = useRef();
    const anchorRef = useRef()

    const handleChange = (e) => {
        setPrompt(e.target.value);
    };

    function downloadImage(){
        anchorRef.current.href = imgRef.current.src
    }
    async function fetchChat(e) {
        e.preventDefault();
        setLoading(true);
        setMessages((prevMessages) => [
            ...prevMessages,
            { origin: "user", message: prompt },
        ]);
        e.target.form[0].value = "";
        axios
            .post(
                "http://127.0.0.1:5000/getChat",
                { prompt: prompt }
            )
            .then((res) => {
                setLoading(false);
                setTopic(topic === "New Chat" ? res.data.topic : "New Chat");
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        origin: res.data.image ? "systemimg" : "system",
                        message: res.data.output,
                    },
                ]);
            });

        // fetch("http://127.0.0.1:5000/getChat", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
        //   body: JSON.stringify({ prompt }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setLoading(false);
        //     setTopic(topic === "New Chat" ? data.topic : "New Chat");
        //     setMessages((prevMessages) => [
        //       ...prevMessages,
        //       {
        //         origin: data.image ? "systemimg" : "sytem",
        //         message: data.output,
        //       },
        //     ]);
        //   });
    }
    return (
        <>
            <Navbar/>
            <form className="  chatbot-form">
                <div className="response-wrapper">
                    {messages.map(({ origin, message }, index) => {
                        return origin === "user" ? (
                            <p key={index} className="user-message">
                                {message}
                            </p>
                        ) : origin === "system" ? (
                            <p key={index} className="system-message">
                                {message}
                            </p>
                        ) : origin === "systemimg" ? (
                            <div id='response-image-container'>
                            <img ref={imgRef} key={index} className="image-message" src={message} />
                            <a onClick={downloadImage} ref={anchorRef} className="download-link-4nft" download="NFTGenAI.png" />
                            </div>
                        ) : (
                            ""
                        );
                    })}
                    {loading ? (
                        <div className="loader system-message">
                            <span className="loader_dot slide_one"></span>
                            <span className="loader__dot"></span>
                            <span className="loader__dot"></span>
                            <span className="loader_dot slide_two"></span>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="prompt-input">
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Send a message"
                    />
                    <button type="submit" onClick={fetchChat}>
                        <img src={sendPrompt} />
                    </button>
                </div>
            </form>

            <nav className="sidebar mt-5">
                <div className="chat-topic">
                    <img src={chatHistory} />
                    <p>NFT Generation</p>
                </div>
            </nav>
        </>
    );
};

export default Generate;