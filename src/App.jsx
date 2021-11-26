import React from "react";
import { Header } from "./components/Header";
import { Planet } from "./containers/Planet";
import { DataContextProvider } from "./context/DataContext";
import { AppWrapper } from "./styles.jsx/GlobalStyles";

export const App = () => {
    return (
        <AppWrapper>
            <DataContextProvider>
                <Header />
                <Planet />
            </DataContextProvider>
        </AppWrapper>
    );
};
