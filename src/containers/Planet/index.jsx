import React, { useEffect, useState } from "react";
import { useData } from "../../hooks/useData.js";
import { Container, InfoItem, NavButton, ImageContainer } from "./styles.jsx";

export const Planet = () => {
    const { current } = useData();
    const [activeContent, setActiveContent] = useState("overview");

    useEffect(() => {
        setActiveContent("overview");
    }, [current]);

    function handleClick(e) {
        const name = e.target.id;
        setActiveContent(name);
    }

    return (
        <Container>
            <nav>
                <NavButton
                    active={activeContent === "overview"}
                    id="overview"
                    onClick={handleClick}
                >
                    Overview
                </NavButton>
                <NavButton
                    active={activeContent === "internal"}
                    id="internal"
                    onClick={handleClick}
                >
                    Structure
                </NavButton>
                <NavButton
                    active={activeContent === "surface"}
                    id="surface"
                    onClick={handleClick}
                >
                    Surface
                </NavButton>
            </nav>

            <ImageContainer>
                {activeContent === "surface" ? (
                    <>
                        <img
                            src={`/images/${current.infos.overview.image}.svg`}
                            alt=""
                        />
                        <span>
                            <img
                                src={`/images/${current.infos[activeContent].image}.png`}
                                alt=""
                            />
                        </span>
                    </>
                ) : (
                    <img
                        src={`/images/${current.infos[activeContent].image}.svg`}
                        alt=""
                    />
                )}
            </ImageContainer>

            <section>
                <h1>{current.title}</h1>
                <p>{current.infos[activeContent].text}</p>
                <a href="/">
                    Source: <strong>Wikipedia</strong>
                </a>
            </section>

            <footer>
                <ul>
                    <InfoItem>
                        <span>Rotation Time</span>
                        <span>{current.data.rotation} Days</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Revolution Time</span>
                        <span>{current.data.revolution} Days</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Radius</span>
                        <span>{current.data.radius} KM</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Temperature</span>
                        <span>{current.data.temperature}°c</span>
                    </InfoItem>
                </ul>
            </footer>
        </Container>
    );
};
