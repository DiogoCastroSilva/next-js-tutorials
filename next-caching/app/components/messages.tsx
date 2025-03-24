import { IMessage } from '@/contracts/message';

export default function Messages({ messages }: { messages: IMessage[] }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
