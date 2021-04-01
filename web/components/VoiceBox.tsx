import Image from "next/image";
import { MicrophoneIcon } from "@heroicons/react/solid";
import styles from "@/styles/Chat.module.css";

const VoiceBox = () => {
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
        <div className={styles.voiceChat}>
          <button className={styles.messageSubmit}>
            <MicrophoneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceBox;
