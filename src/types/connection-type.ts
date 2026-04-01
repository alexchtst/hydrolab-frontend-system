import type { MetaDataInterface } from "../assets/data/data-types";

export interface APIGetPaginationInterface {
    data: MetaDataInterface[];
    total: number;
    totalPages: number;
}

export interface APIGetPairingDataInterface {
    station_name: string;
    data: number[];
}

export interface APIGetSearchnearestDataInterface {
    Station_ID: number;
    Station_Name: string;
    Elevation: number;
    File_Created: string;
    Data_Points: number;
    Years_Covered: string;
    Records: number;
    "Tahun Mulai": number;
    "Tahun Akhir": number;
    Annual_Mean: number;
    Annual_Max: number;
    Missing_Values: number;
    LAT: number;
    LON: number;
    latitude: number;
    longitude: number;
}