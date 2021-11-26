import React, { useState } from "react";
import { Container, Hamburger, LinkNav } from "./styles.jsx";
import { useData } from "../../hooks/useData";

import planets from "../../data/data.json";
const planetsNames = Object.keys(planets);

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { changeCurrent } = useData();

    function handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        changeCurrent(name);
    }

    return (
        <Container active={navbarOpen}>
            <h1>The planets</h1>
            <nav>
                {planetsNames.map((name) => (
                    <LinkNav
                        color={planets[name].color}
                        key={name}
                        onClick={handleClick}
                    >
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
