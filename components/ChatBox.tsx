import Image from "next/image";
import styles from "@/styles/Chat.module.css";

const ChatBox = ({ token }) => {
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
        <div className={styles.messageBox}>
          <iframe
            src={`https://webchat.botframework.com/embed/alfred-pennyworth-bot?s=${token}`}
            className={styles.bot}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
