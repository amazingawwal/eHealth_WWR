export default function MessageList() {

    const messages:string[] = ["Hello there", 'Good morning'];

    return(
        <ul>
            {messages.length > 0? messages.map(message=><li>{message}</li>): <li>No new messages</li> }
        </ul>
    )
};
