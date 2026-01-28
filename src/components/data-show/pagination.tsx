import { ChevronLeft, ChevronRight } from "lucide-react";

export function PaginationButton({ num, onClickHanlder }: { num: number | string, onClickHanlder: () => void }) {
  return (
    <div
      className="p-1 text-sm min-w-8 aspect-square rounded-md bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer"
      onClick={() => onClickHanlder()}
    >
      {num}
    </div>
  )
};

export default function Pagination() {
  return (
    <div className="w-full flex items-center justify-center gap-3 pb-5">
      <div className="p-1 text-sm min-w-8 aspect-square rounded-md bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer"><ChevronLeft /></div>      <div className="p-1 text-sm min-w-8 aspect-square rounded-md bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer">1</div>
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <PaginationButton
        num={1}
        onClickHanlder={() => console.log('')}
      />
      <div className="p-1 text-sm min-w-8 aspect-square rounded-md bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer"><ChevronRight /></div>
    </div>
  );
}
