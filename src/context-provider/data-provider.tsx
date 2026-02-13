import React from "react";
import { DataContext, STORAGE_KEY_MAIN_DATA } from "./data-context";
import type { DataInterface } from "../types/data-store-type";

export default function DataContextProvider({ children }: { children: React.ReactNode }) {
    const [pagNum, setPagNum] = React.useState(0);

    const [selectedData, setSelectedData] = React.useState<DataInterface | null>(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY_MAIN_DATA);
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    });

    const setTempMainData = React.useCallback((data: DataInterface | null) => {
        setSelectedData(data);
        try {
            if (data === null) {
                localStorage.removeItem(STORAGE_KEY_MAIN_DATA);
            } else {
                localStorage.setItem(STORAGE_KEY_MAIN_DATA, JSON.stringify(data));
            }
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, []);

    return (
        <DataContext.Provider value={{
            fetchedMainData: null,
            fetchedDetailData: null,
            setFetchedMainData: () => { },
            setFetchedDetailData: () => { },

            tempMainData: selectedData,
            tempDetailData: null,
            setTempMainData: setTempMainData,
            setTempDetailData: () => { },

            pagNum: pagNum,
            setPagNum: setPagNum,

            TOTAL_PAGE: 403,
            PAGINATION_LIMIT_OFFSET: 25
        }}>
            {children}
        </DataContext.Provider>
    );
}