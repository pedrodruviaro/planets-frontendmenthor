import styled, { css } from "styled-components";

export const Container = styled.main`
    max-width: 1440px;
    margin-inline: auto;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 1rem;
        gap: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        > * {
            flex: 1;
            padding-block: 1rem;
        }
    }

    > div {
        max-width: 20rem;
        padding-inline: 2rem;
        margin-inline: auto;
        margin-bottom: 2rem;
    }

    section {
        display: grid;
        gap: 2rem;
        justify-items: center;
        padding-inline: 2rem;
        margin-bottom: 2rem;

        h1 {
            font-size: 2.5rem;
            line-height: 3.25rem;

            text-align: center;
            text-transform: uppercase;
        }

        p {
            text-align: center;
        }

        a {
            font-size: 0.75rem;
            line-height: 1.5625rem;
            opacity: 0.5;

            strong {
                border-bottom: 1px solid;
            }
        }
    }

    footer {
        padding-inline: 2rem;

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    /* 768px - Tablet Mode */
    @media (min-width: 48rem) {
        display: grid;
        grid-template-areas:
            "image image"
            "info navigation"
            "list list";
        grid-template-columns: 1fr 1fr;

        nav {
            grid-area: navigation;
            align-self: center;
            justify-self: center;
            display: initial;
            border: none;

            > * {
                display: block;
            }
        }

        > div {
            grid-area: image;
            margin-bottom: 4rem;
        }

        section {
            grid-area: info;

            justify-items: left;

            h1,
            p {
                text-align: left;
            }

            h1 {
                font-weight: 400;
            }
        }

        footer {
            grid-area: list;
            padding-bottom: 4rem;

            ul {
                flex-direction: row;
                justify-content: space-between;

                li {
                    display: grid;
                    gap: 0.5rem;
                    flex: 1;
                }
            }
        }
    }

    @media (min-width: 68rem) {
        grid-template-areas:
            "image info"
            "image navigation"
            "list list";

        > div {
            align-self: center;
        }

        footer {
            margin-top: auto;
        }

        nav {
            align-items: flex-start;
            width: 100%;
            padding-inline: 2rem;
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: 1fr;

            button {
                width: 100%;
                text-align: left;
                border: 1px solid red;
            }
        }
    }
`;

export const NavButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    text-transform: uppercase;
    color: #fff;
    position: relative;

    ${(props) =>
        props.active &&
        css`
            font-weight: 700;

            &::after {
                content: "";
                background-color: red;
                width: 100%;
                height: 3px;
                display: block;
                position: absolute;
                bottom: 0;
            }
        `}
`;

export const InfoItem = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5625em 1.5em;

    span:first-child {
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 700;
        font-size: 8px;
    }

    span:last-child {
        font-size: 20px;
        text-transform: uppercase;
        text-align: right;
        font-weight: 500;
        letter-spacing: -0.75px;
        color: #fff;
    }
`;

export const ImageContainer = styled.div`
    position: relative;

    span {
        position: absolute;
        max-width: 6rem;
        bottom: -2rem;
        right: 35%;

        animation: show 300ms forwards;
    }

    @keyframes show {
        from {
            transform: scale(0);
            opacity: 0;
        }

        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
