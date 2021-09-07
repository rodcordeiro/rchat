import styled from 'styled-components';

interface iUser{
    id ?: string;
    picture ?: string;
    username ?: string;
}

const UserBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`,
UserPicture = styled.div`
    background-color: #181818;
    background-image: url('${(props: iUser)=>props.picture}');
    background-size: contain;
    background-position: center;
    height: 50px;
    width: 50px;
    border-radius: 50px;

`;

const User =(props: iUser)=>(
    <UserBadge>
        <UserPicture 
            picture={props.picture}
        />
    </UserBadge>
)
export {
    User
}
