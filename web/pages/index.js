import Link from "next/link";
import { MicrophoneIcon, ChatAltIcon } from "@heroicons/react/outline";

const Home = () => {
  return (
    <section>
      <h2>Talk to AL</h2>

      <div>
        <Link href="/voice">
          <div>
            <MicrophoneIcon />
            <h3>Voice</h3>
          </div>
        </Link>

        <Link href="/chat">
          <div>
            <ChatAltIcon />
            <h3>Chat</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
