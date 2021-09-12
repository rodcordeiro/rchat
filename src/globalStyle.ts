import { createGlobalStyle } from 'styled-components'

// #8a2be2
// 

export default createGlobalStyle`
:root{
    --header-bg-color: #76c893;
    --header-text-color: white;
    
    --msgs-container-bg: yellow;

    --msg-box-bg-color: #181818;
    --msg-box-text-color: #f4f4f4;

    --msg-author-box-bg-color: #18181899;
    --msg-author-box-text-color: #f4f4f4;
    
    --rooms-separator: #18181833;
}
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
body{
    background-color: #f4f4f4;
}
`;