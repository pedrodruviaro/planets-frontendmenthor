import styled, { css } from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;

    display: flex;
    align-items: flex-start;
    gap: 1.75rem;
    font-weight: 700;

    padding: 0.75rem 1.75rem;

    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #fff;

    border: 1px solid rgba(255, 255, 255, 0.5);

    transition: all 200ms;

    span {
        font-size: 0.8rem;
        color: #fff;
        opacity: 0.5;
    }

    &:hover,
    &:focus {
        background: #d8d8d8;
    }

    ${(props) =>
        props.active &&
        css`
            background: #419ebb;
        `}
`;
