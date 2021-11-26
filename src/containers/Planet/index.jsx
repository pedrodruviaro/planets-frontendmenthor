import React, { useEffect } from "react";
import { useData } from "../../hooks/useData.js";
import { Container, InfoItem, NavButton } from "./styles.jsx";

export const Planet = () => {
    const { current } = useData();

    useEffect(() => {
        console.log(current);
    }, [current]);

    return (
        <Container>
            <nav>
                <NavButton>Overview</NavButton>
                <NavButton>Structure</NavButton>
                <NavButton>Surface</NavButton>
            </nav>

            <div>
                <img
                    src={`/images/${current.infos.overview.image}.svg`}
                    alt=""
                />
            </div>

            <section>
                <h1>{current.title}</h1>
                <p>{current.infos.overview.text}</p>
                <a href="/">
                    Source: <strong>Wikipedia</strong>
                </a>
            </section>

            <footer>
                <ul>
                    <InfoItem>
                        <span>Rotation Time</span>
                        <span>{58.6} Days</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Rotation Time</span>
                        <span>{58.6} Days</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Rotation Time</span>
                        <span>{58.6} Days</span>
                    </InfoItem>
                    <InfoItem>
                        <span>Rotation Time</span>
                        <span>{58.6} Days</span>
                    </InfoItem>
                </ul>
            </footer>
        </Container>
    );
};
