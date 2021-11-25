import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.375rem 2rem;
    height: 4rem;

    h1 {
        font-size: 1.75rem;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1;
    }

    nav {
        display: flex;
        gap: 2rem;
    }
`;

export const LinkNav = styled.a`
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    position: relative;
    line-height: 4rem;

    &::before {
        content: "";
        background-color: ${(props) => props.color};
        width: 100%;
        height: 3px;
        display: block;
        position: absolute;
        top: 0;

        transform: scale(0);
        transition: transform 200ms;
    }

    &:hover::before {
        transform: scale(1);
    }
`;
