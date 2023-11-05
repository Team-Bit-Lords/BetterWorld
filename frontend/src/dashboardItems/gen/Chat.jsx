import { SYSTEM, USER } from "./ImageGenAI"

const Chat = (props) => {

  if (props.image) return (
    <div className="chat chat-start">
          <img src={props.output} className="w-[512px] h-[512px]" />
    </div>
  )


  else if (props.type == SYSTEM) return (
    <div className="chat chat-start">
      <div className="chat-header pl-2 text-xs">
        Bot
      </div>
      <div className="chat-bubble chat-bubble-primary text-white shadow-md">{props.output}</div>
    </div>
  )

  else if (props.type === USER) return (
    <div className="chat chat-end">
      <div className="chat-header pr-2 text-xs">
        You
      </div>
      <div className="chat-bubble chat-bubble-primary text-white shadow-md">{props.output}</div>
    </div>
  )
}

export default Chat