import React from "react";
import { Container, LinkNav } from "./styles.jsx";

import planets from "../../data/data.json";

const planetsNames = Object.keys(planets);

export const Header = () => {
    console.log(planetsNames);
    return (
        <Container>
            <h1>The planets</h1>
            <nav>
                {planetsNames.map((name) => (
                    <LinkNav color={planets[name].color} href="/" key={name}>
                        {name}
                    </LinkNav>
                ))}
            </nav>
        </Container>
    );
};
