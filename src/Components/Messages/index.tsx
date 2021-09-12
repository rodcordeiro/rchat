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
        min-height: 80px;
        max-width: 400px;
        justify-self: flex-start;
        background: var(--msg-box-bg-color);
        color: var(--msg-box-text-color);
        padding: 5px 10px;
        margin: 5px 10px 5px 25px;
        border-radius: 0px 15px 15px 15px;
    }
    // &:before {
    //     content: "";
        
    //     width: 0;
    //     height: 0;
    //     border-top: 20px solid var(--msg-box-bg-color);
    //     border-right: 0px solid var(--msg-box-bg-color);
    //     border-bottom: 0px solid transparent;
    //     border-left: 40px solid transparent;
    //     transform: skew(20deg);

    //     left: -30px;
    //     top: 15px;
    //     position: relative;
    //   }
`,
MsgOwnerBox = styled.div`
    &{
        min-width: 50px;
        width: 80%;
        min-height: 60px;
        max-width: 400px;
        align-self: flex-end;
        color: var(--msg-author-box-text-color);
        background: var(--msg-author-box-bg-color);
        padding: 5px 10px;
        margin: 5px 25px 5px 10px;  
        border-radius: 15px 0px 15px 15px;
    }
`,
Author = styled.p`
    &{
        font-size: 15px;
        color: blue;
        padding: 5px 10px;
    }
`,
Data = styled.p`
    font-size: 14px;
    padding: 5px 10px;
    position: relative;
    width: 50px;
    left: 85%;
    top: 15%;
`;

const formatedDate= (date: string)=>{
    const d = new Date(date),
        min = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`

    return `${d.getHours()}:${min}`
}
const Message = (props: iMessage)=>{
    return props.isAuthor ? (
        <MsgOwnerBox>
            <p>{props.text}</p>
            <Data>{formatedDate(props.date)}</Data>
        </MsgOwnerBox>
    ) : (
        <MessageBox>
            <Author>{props.author.username}</Author>
            <p>{props.text}</p>
            <Data>{formatedDate(props.date)}</Data>
        </MessageBox>
    )
}


export {
    Message
}