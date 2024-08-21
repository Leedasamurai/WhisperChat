import React from "react";
import {
  useMultiChatLogic,
  MultiChatWindow,
  MultiChatSocket,
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/CustomMessageForms/StandardMessageForm";
import Ai from "@/components/CustomMessageForms/Ai";

function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testUser",
    "1234"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          return <StandardMessageForm props={props} activeChat={chatProps} />;
        }}
      />
    </div>
  );
}

export default Chat;
