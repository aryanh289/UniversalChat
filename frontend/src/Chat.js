import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./bottom.css";
import { BsTypeBold, BsTypeItalic, BsTypeStrikethrough, BsLink45Deg} from "react-icons/bs";
import { FaListUl, FaListOl, FaQuoteLeft, FaCode   }  from "react-icons/fa";
import { VscFileCode,VscMention } from "react-icons/vsc";
import { HiOutlineEmojiHappy, HiPlusCircle } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">


      <div className="chat-header">
        <p>Live Chat</p>
      </div>



      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>




      <div class="container">
      {/* <p>Chat application ui</p> */}
      {/* <!-- Main container of the chat ui --> */}
      <div class="base-container">
        {/* <!-- All the styling elements here --> */}


        <div class="styling-elements">
          <div class="border-block b-i-s">
            <div class="style-elements bold"><BsTypeBold/></div>
            <div class="style-elements italic"><BsTypeItalic/></div>
            <div class="style-elements strikethrough"><BsTypeStrikethrough/></div>
          </div>
          <div class="border-block hlink">
            <div class="style-elements hyperlink"><BsLink45Deg/></div>
          </div>
          <div class="border-block bn-list">
            <div class="style-elements bullet-list"><FaListUl/></div>
            <div class="style-elements number-list"><FaListOl/></div>
          </div>
          <div class="border-block bq">
            <div class="style-elements blockquote"><FaQuoteLeft/></div>
          </div>
          <div class="style-elements code-snippet"><FaCode/></div>
          <div class="style-elements code-block"><VscFileCode/></div>
        </div>

        
        {/* <!-- All the text comes here --> */}
        <input
          class="chat-text real-chat"
          type="text"
          value={currentMessage}
          placeholder="Chat comes here..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }} 
        />

        {/* <!-- All the other functionality here --> */}
        <div class="addition styling-elements">
          <div class="add-files border-block">
            <div class="attach-files style-elements"><HiPlusCircle/></div>
          </div>
          <div class="emoji mention">
            <div class="add-emoji style-elements"><HiOutlineEmojiHappy/></div>
            <div class="add-mention style-elements"><VscMention/></div>
          </div>
          <button class="send submit btn-send" onClick={sendMessage}><IoSend/></button>
        </div>

        
    </div>
    </div>
    </div>

  );
}

export default Chat;