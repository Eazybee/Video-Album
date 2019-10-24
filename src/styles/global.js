import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fafafa;
  color: #3c414d;
  font-family: Calibri, Arial, sans-serif;
  font-size: 16px;
  margin: 0 10%;
}

@media screen and (min-width:1025px) and (max-width:1230px){
    body, input, button {
      margin: 0;
       font-size: 16px;
    }

}
@media screen and (min-width:769px) and (max-width:1024px){
    body {
      margin: 0;
       font-size: 14px;
    }
}
@media screen and (min-width:600px) and (max-width:900px),
 screen and (max-width:768px){
    body {
      margin: 0;
       font-size: 14px;
    }

}
@media screen and (min-width:600px) and (max-width:768px){

    body , input, button{
      margin: 0;
      font-size: 14px;
    }
}

@media screen and (min-width:400px) and (max-width:599px),screen and (max-width:399px){
    body, input, button {
      margin: 0;
      font-size: 14px;
    }
}

@media screen and (max-width:399px){
    body {
      margin: 0;
      font-size: 14px;
    }
}
@media screen and (max-width:350px){
    body {
      margin: 0;
      font-size: 14px;
    }
}

`;

export default GlobalStyle;
