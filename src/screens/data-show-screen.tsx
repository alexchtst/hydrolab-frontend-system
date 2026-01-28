import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../cmponents/table";

export default function DataShowScreen() {
    const usenavigate = useNavigate();

    return (
        <div className="md:p-16 p-12 space-y-12">
            <div className="flex flex-col gap-y-5 items-center">
                <h1 className="font-semibold md:max-w-175 text-center text-3xl max-w-[80vw]">
                    Adipisicing proident eu enim incididunt excepteur.
                </h1>
                <h2 className="md:max-w-200 max-w-[90vw] text-center">
                    Commodo esse irure veniam occaecat consectetur sit est in aliqua nostrud commodo est.
                    Culpa in consectetur ex est esse pariatur nulla ipsum laboris id sint Lorem laborum.
                    Ea Lorem et occaecat sint laboris nisi reprehenderit non mollit tempor occaecat mollit.
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:px-32">
                <div className="flex flex-col gap-1 md:col-span-2">
                    <label htmlFor="long" className="text-sm font-semibold">Longitude</label>
                    <input type="text" name="long" id="long" className="p-2 border-gray-300 rounded-md border" />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                    <label htmlFor="lat" className="text-sm font-semibold">Latitude</label>
                    <input type="text" name="lat" id="lat" className="p-2 border-gray-300 rounded-md border" />
                </div>
                <div className="flex items-end justify-end">
                    <button className="p-2.5 bg-blue-500 text-white w-full rounded-md cursor-pointer hover:bg-blue-600 text-sm">Cari Cakupan Wilayah</button>
                </div>
            </div>
            <div className="p-4 rounded-md border border-gray-200">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">No.</TableHead>
                            <TableHead className="text-center w-32">COl 1</TableHead>
                            <TableHead className="text-center w-24">COl 2</TableHead>
                            <TableHead className="text-center w-24">COl 3</TableHead>
                            <TableHead className="text-center w-28">COl 4</TableHead>
                            <TableHead className="text-center w-28">COl 5</TableHead>
                            <TableHead className="text-center w-28">COl 6</TableHead>
                            <TableHead className="text-center w-28">COl 7</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="w-10">No.</TableCell>
                            <TableCell onClick={() => usenavigate('/content/test-data')} className="text-center w-32 text-sm hover:underline cursor-pointer">
                                CONTENT 1
                            </TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 2</TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 3</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 4</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 5</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 6</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="w-10">No.</TableCell>
                            <TableCell onClick={() => usenavigate('/content/test-data')} className="text-center w-32 text-sm hover:underline cursor-pointer">
                                CONTENT 1
                            </TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 2</TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 3</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 4</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 5</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 6</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="w-10">No.</TableCell>
                            <TableCell onClick={() => usenavigate('/content/test-data')} className="text-center w-32 text-sm hover:underline cursor-pointer">
                                CONTENT 1
                            </TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 2</TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 3</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 4</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 5</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 6</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="w-10">No.</TableCell>
                            <TableCell onClick={() => usenavigate('/content/test-data')} className="text-center w-32 text-sm hover:underline cursor-pointer">
                                CONTENT 1
                            </TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 2</TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 3</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 4</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 5</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 6</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="w-10">No.</TableCell>
                            <TableCell onClick={() => usenavigate('/content/test-data')} className="text-center w-32 text-sm hover:underline cursor-pointer">
                                CONTENT 1
                            </TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 2</TableCell>
                            <TableCell className="text-center w-24 text-sm">CONTENT 3</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 4</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 5</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 6</TableCell>
                            <TableCell className="text-center w-28 text-sm">CONTENT 7</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
