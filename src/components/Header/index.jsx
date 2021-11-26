import React, { useState } from "react";
import { Container, Hamburger, LinkNav } from "./styles.jsx";

import planets from "../../data/data.json";

const planetsNames = Object.keys(planets);

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Container active={navbarOpen}>
            <h1>The planets</h1>
            <nav>
                {planetsNames.map((name) => (
                    <LinkNav color={planets[name].color} href="/" key={name}>
                        {name}
                    </LinkNav>
                ))}
            </nav>

            <Hamburger
                active={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <span></span>
            </Hamburger>
        </Container>
    );
};
