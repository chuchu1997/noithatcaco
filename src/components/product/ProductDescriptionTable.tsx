import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
type ProductTableDsInterface = {
  id:string;
  size?:string;
  material?:string;
  origin?:string;
  maintenance?:string;
  quality?:string;
  deal?:string;
  customManufacturing?:string;
  promotion?:string;

}
const data:ProductTableDsInterface[]=[
  {
    id: "m5gr84i9",
  },
]


export const columns: ColumnDef<ProductTableDsInterface>[] = [
  {
    accessorKey: "material",
    header: "Chất liệu",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("material") ?? "Gỗ công nghiệp MDF lõi vàng phủ melamin hai mặt"}
      </div>
    ),
  },
  {
    accessorKey: "size",
    header: "Kích thước",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("size") ?? "1920X1080"}
      </div>
    ),
  },
  {
    accessorKey: "origin",
    header: "Xuất xứ",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("origin") ?? "Sản xuất trực tiếp tại xưởng Nội Thất CaCo"}
      </div>
    ),
  },
  {
    accessorKey: "maintenance",
    header: "Bảo hành",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("maintenance") ?? "Bảo hành 2 năm"}
      </div>
    ),
  },
  {
    accessorKey: "quality",
    header: "Chất lượng",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("quality") ?? "1"}
      </div>
    ),
  },
  {
    accessorKey: "deal",
    header: "Cam kết",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("deal") ?? "Sản xuất trực tiếp tại xưởng hàng mới 100%"}
      </div>
    ),
  },
  {
    accessorKey: "customManufacturing",
    header: "Sản xuất theo yêu cầu",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("customManufacturing") ?? "Quý khách có thể đặt hàng theo kích thước chất liệu màu sắc theo yêu cầu"}
      </div>
    ),
  },
  {
    accessorKey: "promotion",
    header: "Ưu đãi",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("promotion") ?? "Miễn phí vận chuyển và lắp đặt HCM đơn hàng trên 10tr"}
      </div>
    ),
  },
];

export function ProductDescriptionTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full mt-8">
    
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  )
}
