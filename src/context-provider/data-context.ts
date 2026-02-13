import { createContext } from "react";
import type { DataContentInterface, DataInterface } from "../types/data-store-type";

export const STORAGE_KEY_MAIN_DATA = "main-data";
export const STORAGE_KEY_CONTENT_DATA = "content-data";

export type DataContextType = {
    fetchedMainData: DataInterface[] | null;
    fetchedDetailData: DataContentInterface | null;
    setFetchedMainData: (d: DataInterface[] | null) => void;
    setFetchedDetailData: (d: DataContentInterface | null) => void;

    tempMainData: DataInterface | null;
    tempDetailData: DataContentInterface | null;
    setTempMainData: (d: DataInterface | null) => void;
    setTempDetailData: (d: DataContentInterface | null) => void;

    pagNum: number;
    setPagNum: (d: number) => void;

    TOTAL_PAGE: number | 600;
    PAGINATION_LIMIT_OFFSET: number | 25;
}

export const DataContext = createContext<DataContextType>({
    fetchedMainData: null,
    fetchedDetailData: null,
    setFetchedMainData: () => {},
    setFetchedDetailData: () => {},

    tempMainData: null,
    tempDetailData: null,
    setTempMainData: () => {},
    setTempDetailData: () => {},

    pagNum: 1,
    setPagNum: () => {},

    TOTAL_PAGE: 403,
    PAGINATION_LIMIT_OFFSET: 25
})