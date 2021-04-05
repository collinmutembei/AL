import ChatBox from "@/components/ChatBox";

const Chat = ({token}) => {
  return <ChatBox token={token} />;
};

export async function getServerSideProps(context) {
  const url = "https://webchat.botframework.com/api/tokens";
  const params = {
    "headers": {
      "authorization": `BotConnector ${process.env.AZURE_BOT_SECRET}`
    },
    "method": "GET"
  };
  const botToken = await fetch(url, params)
    .then(response => { return response.json() })
    .catch(error => console.log(error));
  
  return {
    props: {
      token: botToken,
    },
  };
}


export default Chat;
