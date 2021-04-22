import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
        background-color:transparent;
    }
    input{
        outline:none;
    }
`;

export default GlobalStyle;