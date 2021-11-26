import React, { useEffect } from "react";
import { useData } from "../../hooks/useData.js";
import { Container } from "./styles.jsx";

export const Planet = () => {
    const { current } = useData();

    useEffect(() => {
        console.log(current);
    }, [current]);

    return (
        <Container>
            <h1>{current.title}</h1>
        </Container>
    );
};
