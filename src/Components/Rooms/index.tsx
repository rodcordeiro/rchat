import styled from 'styled-components';
//background-image: url('${props=>props.picture}');
interface iRoom{
    id ?: string;
    name ?: string;
    picture: string;
}
const RoomBadge = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid var(--rooms-separator);
`,
 RoomIcon = styled.div`
    background-image: url('${(props: iRoom)=>props.picture}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    height: 50px;
    width: 50px;
    border-radius:50px;
    margin-right: 5%;
`,
 RoomTitle = styled.h3`
    width: 80%;
    font-size:16px;
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
export type {
    iRoom
}