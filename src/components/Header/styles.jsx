import styled, { css } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.375rem 2rem;
    height: 4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 4rem;

    h1 {
        font-size: 1.75rem;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1;
    }

    nav {
        display: flex;
        gap: 2rem;

        overflow-y: scroll;
    }

    @media (max-width: 55rem) {
        flex-direction: column;
    }

    @media (max-width: 45rem) {
        flex-direction: row;
        position: relative;

        nav {
            position: fixed;
            top: 4rem;
            right: 0;
            left: 0;
            bottom: 0;

            background-color: #070724;

            display: flex;
            flex-direction: column;
            gap: 0;

            transform: translateX(100%);
            transition: transform 200ms linear;
        }

        ${(props) =>
            props.active &&
            css`
                nav {
                    transform: initial;
                }
            `}
    }
`;

export const LinkNav = styled.span`
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    position: relative;
    line-height: 4rem;

    cursor: pointer;

    @media (min-width: 45rem) {
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
    }

    @media (max-width: 45rem) {
        font-size: 1rem;
        font-weight: 700;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        display: flex;
        align-items: center;
        gap: 1rem;

        &::before {
            content: "";
            width: 15px;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: ${(props) => props.color};
            display: block;
        }
    }
`;

export const Hamburger = styled.div`
    @media (min-width: 45rem) {
        display: none;
    }

    display: grid;
    gap: 6px;
    cursor: pointer;
    position: relative;

    &::before,
    &::after {
        content: "";
        display: block;
        background-color: #fff;
        width: 30px;
        height: 3px;
        position: relative;
        transition: all 200ms ease-in-out;
    }

    span {
        display: block;
        background-color: #fff;
        width: 30px;
        height: 3px;
        position: relative;
        transition: all 200ms ease-in-out;
    }

    ${(props) =>
        props.active &&
        css`
            top: 8px;
            &::before {
                transform: rotate(45deg);
                top: 4px;
            }

            span {
                transform: rotate(-45deg);
                bottom: 4px;
            }

            &::after {
                /* position: absolute; */
                transform: translateX(100%);
                opacity: 0;
            }
        `}
`;
