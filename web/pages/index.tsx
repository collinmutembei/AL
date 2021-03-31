import { MicrophoneIcon, ChatAltIcon } from "@heroicons/react/outline";
import Card from "@/components/Card";

const Home = () => {
  return (
    <section>
      <h2 className="flex flex-col items-center mt-20 text-3xl font-bold">
        Talk to AL
      </h2>

      <div className="flex flex-1 items-center justify-center my-40">
        <a href="/voice">
          <Card>
            <div className="h-32 w-32 flex flex-col items-center justify-center hover:text-blue-500">
              <MicrophoneIcon className="h-8 w-8" />
              <h3 className="font-semibold">Voice</h3>
            </div>
          </Card>
        </a>

        <a href="/chat">
          <Card>
            <div className="h-32 w-32 flex flex-col items-center justify-center hover:text-blue-500">
              <ChatAltIcon className="h-8 w-8" />
              <h3 className="font-semibold">Chat</h3>
            </div>
          </Card>
        </a>
      </div>
    </section>
  );
};

export default Home;
