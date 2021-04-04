import Image from "next/image";
import styles from "@/styles/Chat.module.css";

const ChatBox = ({token}) => {
  
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
          {/* <div className={styles.messages}>
            <div id="message-content" className={styles.messagesContent}></div>
          </div> */}
          <div className={styles.messageBox}>
            {/* <>
              <div className={`${styles.message} ${styles.loading} ${styles.new}`}>
                <figure className={styles.avatar}>
                  <img src="/logo.png" alt="avatar" />
                </figure>
                <span></span>
              </div>
              <div className={`${styles.message} ${styles.new}`}>
                <figure className={styles.avatar}>
                  <img src="/logo.png" alt="avatar" />
                </figure>
                {message}
              </div>
              <div className={styles.timestamp}>{timestamp}</div>
            </> */}
            <iframe src={`https://webchat.botframework.com/embed/alfred-pennyworth-bot?s=${token}`} className={styles.bot}></iframe>
            {/* <textarea
              id="message-input"
              className={styles.messageInput}
              placeholder="Type message..."
            ></textarea> */}
            {/* <button
              id="message-submit"
              type="submit"
              className={styles.messageSubmit}
            >
              Send
            </button> */}
          </div>
        </div>
      </div>
    );
}

export default ChatBox;