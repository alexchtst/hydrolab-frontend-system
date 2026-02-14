import React from "react";
import { DataContext } from "../context-provider/data-context";
import type { MetaDataInterface } from "../assets/data/data-types";
import { searchNearest } from "../lib/dataService";
import SearchMap from "../components/contain-detail/search-map";

export default function SearchScreen() {
    const { selectedLat, selectedLon } = React.useContext(DataContext);
    const [lat, setLat] = React.useState<string>(selectedLat?.toString() ?? "");
    const [long, setLong] = React.useState<string>(selectedLon?.toString() ?? "");
    const [range, setRange] = React.useState<string>("500");

    const [searchData, setSearchData] = React.useState<MetaDataInterface[]>([]);

    function handleSearch() {
        if (!lat || !long || !range) {
            return;
        }

        const parsedLat = parseFloat(lat);
        const parsedLong = parseFloat(long);
        const parsedRange = parseFloat(range);

        if (isNaN(parsedLat) || isNaN(parsedLong) || isNaN(parsedRange)) {
            return;
        }

        const data: MetaDataInterface[] = searchNearest(parsedLat, parsedLong, parsedRange / 1000)
        setSearchData(data)
        // console.log(data)
        console.log("Search center:", parsedLat, parsedLong, parsedRange / 1000);
    }

    


    return (
        <div className="space-y-8 bg-blue-50 pb-12">

            {/* Title */}
            <div className="md:px-8 px-6 pt-12">
                <div className="flex flex-col gap-y-5 items-center">
                    <h1 className="font-semibold text-center text-3xl max-w-[80vw]">
                        Adipisicing proident eu enim incididunt excepteur.
                    </h1>

                    <h2 className="max-w-[90vw] text-center text-gray-500">
                        Commodo esse irure veniam occaecat consectetur sit est in aliqua.
                    </h2>
                </div>
            </div>

            {/* Form */}
            <div className="w-full flex justify-center">
                <div className="w-[70%] bg-white p-6 rounded-lg shadow-md">

                    <div className="grid md:grid-cols-4 gap-4">

                        {/* Latitude */}
                        <div>
                            <label className="text-sm font-medium">Latitude</label>
                            <input
                                value={lat}
                                onChange={(e) => setLat(e.target.value)}
                                className="w-full mt-1 px-3 py-2 border rounded-md"
                            />
                        </div>

                        {/* Longitude */}
                        <div>
                            <label className="text-sm font-medium">Longitude</label>
                            <input
                                value={long}
                                onChange={(e) => setLong(e.target.value)}
                                className="w-full mt-1 px-3 py-2 border rounded-md"
                            />
                        </div>

                        {/* Range */}
                        <div>
                            <label className="text-sm font-medium">Range (meter)</label>
                            <input
                                value={range}
                                onChange={(e) => setRange(e.target.value)}
                                placeholder="max range: 10000 (for now)"
                                className="w-full mt-1 px-3 py-2 border rounded-md"
                            />
                        </div>

                        {/* Button */}
                        <div className="flex items-end">
                            <button
                                onClick={() => handleSearch()}
                                className="p-2.5 bg-blue-500 text-white w-full rounded-md cursor-pointer hover:bg-blue-600 text-sm"
                            >
                                Show
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-full flex justify-center">
                <div className="w-[70%] xl:h-120 h-80">

                    <SearchMap
                        isStatic={false}
                        createControll={true}
                        centralPoint={{lat: parseFloat(lat), lon: parseFloat(long)}}
                        range={parseFloat(range) / 1000}
                        showedStation={searchData}
                    />

                </div>
            </div>

        </div>
    );
}
