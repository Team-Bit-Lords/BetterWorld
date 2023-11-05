import React, { useReducer, useContext } from 'react'
import sendChatIcon from '../../assets/sendChatIcon.svg'
import { ChatbotContext, CHANGE_PROMPT } from './ImageGenAI'

const ChatInput = () => {

  const {stateContext, dispatchContext, handleSubmit} = useContext(ChatbotContext)

  const handleChange = (e) => {
    dispatchContext({type: CHANGE_PROMPT, payload: {prompt: e.target.value}})
  }

  return (
    <form className="flex justify-center h-12" onSubmit={handleSubmit}>
      <input type="text" placeholder="Ask your question here"
        className="input input-bordered input-primary w-full max-w-xs rounded-r-none focus:outline-none"
        value={stateContext.prompt}
        onChange={handleChange}/>
        
      <button type="submit" className="btn btn-primary rounded-l-none">
        <img className="h-12 py-3" src={sendChatIcon} />
      </button>
    </form>
  )
}

export default ChatInput