"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { DataTableViewOptions } from "./data-table-view-options"

import { paymentStatuses, reservations } from "../data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

import {
  Download, UserPlus
} from "lucide-react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length

  const handleExport = () => {
    const selectedRows = table.getState().rowSelection
    const selectedRowsIds = Object.keys(selectedRows).filter(
      (key) => selectedRows[key]
    )
    const selectedRowsData = table.getSortedRowModel().rows.filter((row) =>
      selectedRowsIds.includes(row.id)
    )

    // This will be used to generate the CSV file of the selected clients
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search by emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("reservation") && (
          <DataTableFacetedFilter
            column={table.getColumn("reservation")}
            title="Reservation"
            options={reservations}
          />
        )}
        {table.getColumn("paymentStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("paymentStatus")}
            title="Payment"
            options={paymentStatuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      <Button variant="outline" className="ml-2 hidden h-8 lg:flex" size="sm" onClick={handleExport}>
        <Download className="mr-2 h-4 w-4" /> Export CSV
      </Button>
      <Button variant="default" className="ml-2 hidden h-8 lg:flex" size="sm" asChild>
        <Link href="/add-client">
          <UserPlus className="mr-2 h-4 w-4" /> Add client
        </Link>
      </Button>
    </div>
  )
}
