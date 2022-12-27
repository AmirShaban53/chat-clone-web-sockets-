import { io, Socket } from "socket.io-client";
import { useEffect, useContext, useState, FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API;
const STORAGE_KEY = "clone_key_username";
export default function Home() {
  const [socket, setSocket] = useState<Socket>();
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem(STORAGE_KEY, message);
    // socket?.emit("send_message", message);
    // setMessage("");
  };

  // useEffect(() => {
  //   const newSocket = io(`${API_URL}`);
  //   setSocket(newSocket);

  //   return () => {
  //     newSocket.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   socket?.on("receive_message", (data) => {
  //     setText(data);
  //   });
  // }, [socket]);

  useEffect(() => {
    const name = localStorage.getItem(STORAGE_KEY);
    if (name != null) {
      setName(name);
    }
  }, []);

  return (
    <>
      <p>welcome to chat clone</p>
      <p>name: {name}</p>
      {text}
      <form onSubmit={(e) => handleSendMessage(e)}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">send</button>
      </form>
    </>
  );
}
