import Image from "next/image";
import styles from "@/styles/ChatBox.module.css";

const ChatBox = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.chat}>
        <div className={styles.chatTitle}>
          <figure className={styles.avatar}>
            <Image width="30%" height="30%" src={"/logo.png"} alt="avatar" />
          </figure>
          <h1>Alfred Pennyworth</h1>
          <h2>Financial Bot</h2>
        </div>
        <div className={styles.messages}>
          <div className={styles.messagesContent}></div>
        </div>
        <div className={styles.messageBox}>
          <textarea
            className={styles.messageInput}
            placeholder="Type message..."
          ></textarea>
          <button type="submit" className={styles.messageSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
