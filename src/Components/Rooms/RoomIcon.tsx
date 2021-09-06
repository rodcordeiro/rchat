import styled from 'styled-components';
//background-image: url('${props=>props.picture}');
interface iIcon{
    picture: string
}
const RoomBadge = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid #18181833;
`,
 RoomIcon = styled.div`
    background-image: url('${(props: iIcon)=>props.picture}');
    background-repeat: norepeat;
    background-size: contain;
    background-clip: borderbox;
    height: 50px;
    width: 50px;
    border-radius:50px;
    margin-right: 5%;
`,
 RoomTitle = styled.h3`
    width: 80%;
    font-size:16px;
    font-family: sans-serif;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`;
const Room = (props: any)=>(
    <RoomBadge>
        <RoomIcon picture={props.picture}/>
        <RoomTitle>{props.name}</RoomTitle>
    </RoomBadge>
)
export {
    Room
}