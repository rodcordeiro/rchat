import styled from 'styled-components';

interface iMessage{
    id?: string;
    date: string;
    author: {
        id: string;
        username: string;
    };
    text: string;
    room: string;
    isAuthor: boolean
}

const MessageBox = styled.div`
    &{
        min-width: 50px;
        width: 80%;
        min-height: 100px;
        max-width: 400px;
        justify-self: flex-start;
        background: var(--msg-box-bg-color);
        color: var(--msg-box-text-color);
        padding: 5px 10px;
        margin: 5px 10px 5px 25px;
        border-radius: 0px 15px 15px 15px;
    }
    &:before {
        content: "";
        
        width: 0;
        height: 0;
        border-top: 20px solid var(--msg-box-bg-color);
        border-right: 0px solid var(--msg-box-bg-color);
        border-bottom: 0px solid transparent;
        border-left: 40px solid transparent;
        transform: skew(20deg);

        left: -30px;
        top: 15px;
        position: relative;
      }
`,
MsgOwnerBox = styled.div`
    &{
        min-width: 50px;
        width: 80%;
        min-height: 100px;
        max-width: 400px;
        align-self: flex-end;
        background: blue;
        padding: 5px 10px;
        margin: 5px 25px 5px 10px;  
        border-radius: 15px 0px 15px 15px;
    }
    &:before {
        content: "";
        
        width: 0;
        height: 0;
        border-top: 20px solid var(--msg-box-bg-color);
        border-right: 40px solid transparent;
        border-bottom: 0px solid transparent;
        border-left: 0px solid var(--msg-box-bg-color);
        
        right: -30px;
        top: 15px;
        position: relative;
      }
`;

const Message = (props: iMessage)=>{
    return props.isAuthor ? (
        <MsgOwnerBox>
            <p>{props.text}</p>
            <p>{props.date}</p>
        </MsgOwnerBox>
    ) : (
        <MessageBox>
            <p>{props.text}</p>
            <p>{props.date}</p>
        </MessageBox>
    )
}


export {
    Message
}