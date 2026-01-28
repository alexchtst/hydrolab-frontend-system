import React from "react";
import { DataContext } from "./data-context";

export default function DataContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <DataContext.Provider value={{
            fetchedMainData: null,
            fetchedDetailData: null,
            setFetchedMainData: () => { },
            setFetchedDetailData: () => { },

            tempMainData: null,
            tempDetailData: null,
            setTempMainData: () => { },
            setTempDetailData: () => { },
        }}>
            {children}
        </DataContext.Provider>
    );
}