import React, { createContext, useState } from "react";
import planets from "../data/data.json";

export const DataContext = createContext();
DataContext.displayName = "Data Planets Context";

export const DataContextProvider = ({ children }) => {
    const [current, setCurrent] = useState(planets.mercury);

    function changeCurrent(value) {
        const newPlanet = planets[value];
        setCurrent(newPlanet);
    }

    return (
        <DataContext.Provider value={{ current, changeCurrent }}>
            {children}
        </DataContext.Provider>
    );
};
