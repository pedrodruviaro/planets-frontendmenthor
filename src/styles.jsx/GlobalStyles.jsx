import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        font-family: 'Spartan', sans-serif;
    }


    h1 {
        font-size: 80px;
        line-height: 103px;
        font-family: 'Antonio', sans-serif;
    }

    h2 {
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -1.5;
        font-family: 'Antonio', sans-serif;    
    }

    h3 {
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.6;
        font-family: 'Spartan', sans-serif;
    }

    h3 {
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1;
        font-family: 'Spartan', sans-serif;
    }

    p, a, span {
        font-size: 1rem;
        line-height: 1.5rem;
    }


`;

export const AppWrapper = styled.main`
    background-image: url(${"/images/background-stars.svg"});
    background-color: #070724;

    min-height: 100vh;

    color: #fff;
`;
