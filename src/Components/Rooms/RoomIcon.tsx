import { ProviderProps } from 'react';
import styled from 'styled-components';
//background-image: url('${props=>props.picture}');
const RoomIcon = styled.div`
    
    background-repeat: norepeat;
    background-size: containe;
    background-clip: borderbox;
    height: 50px;
    width: 50px;
`;

const Room = (props: any)=>(
    <>
        {props.text}
    </>
)
export {
    Room
}