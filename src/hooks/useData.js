import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useData = () => {
    const values = useContext(DataContext);
    return values;
};
