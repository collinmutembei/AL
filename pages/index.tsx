import Link from "next/link";
import { MicrophoneIcon, ChatAltIcon } from "@heroicons/react/outline";
import Card from "@/components/Card";

const Home = () => {
  return (
    <section>
      <h2 className="flex flex-col items-center mt-20 text-3xl font-bold">
        Talk to AL
      </h2>

      <div className="flex flex-1 items-center justify-center my-40">
        <Card>
          <Link href="/voice">
            <div className="h-32 w-32 flex flex-col items-center justify-center hover:text-blue-500">
              <MicrophoneIcon className="h-8 w-8" />
              <h3 className="font-semibold">Voice</h3>
            </div>
          </Link>
        </Card>

        <Card>
          <Link href="/chat">
            <div className="h-32 w-32 flex flex-col items-center justify-center hover:text-blue-500">
              <ChatAltIcon className="h-8 w-8" />
              <h3 className="font-semibold">Chat</h3>
            </div>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default Home;
