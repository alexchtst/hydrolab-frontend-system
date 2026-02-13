export interface MetaDataInterface {
  Station_ID: number;
  Station_Name: string;
  Elevation: number;
  File_Created: string;
  Data_Points: number;
  Years_Covered: string;
  Records: number;
  Start_Year: number;
  End_Year: number;
  Annual_Mean: number;
  Annual_Max: number;
  Missing_Values: number;
  LAT: number;
  LON: number;
  latitude: number;
  longitude: number;
}

export interface GridMeta {
  lat_start: number;
  lon_start: number;
  lat_step: number;
  lon_step: number;
  lat_count: number;
  lon_count: number;
}

export interface AllDataInterface {
  data: MetaDataInterface[];
}
