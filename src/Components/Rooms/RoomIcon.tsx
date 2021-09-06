import { ProviderProps } from 'react';
import styled from 'styled-components';
//background-image: url('${props=>props.picture}');
const RoomIcon = styled.div`
    background-image: url('https://rodcordeiro.github.io/shares/img/baracktocat.jpg');
    background-repeat: norepeat;
    background-size: contain;
    background-clip: borderbox;
    height: 50px;
    width: 50px;
`;

const Room = (props: any)=>(
    <div>
        <RoomIcon />
        {props.text}
    </div>
)
export {
    Room
}