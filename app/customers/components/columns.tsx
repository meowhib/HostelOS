"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import { paymentStatuses, reservations } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "reservation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reservation" />
    ),
    cell: ({ row }) => {
      const reservation = reservations.find(
        (reservation) => reservation.value === row.getValue("reservation")
      )

      if (!reservation) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{reservation.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment" />
    ),
    cell: ({ row }) => {
      const paymentStatus = paymentStatuses.find(
        (paymentStatus) => paymentStatus.value === row.getValue("paymentStatus")
      )

      if (!paymentStatus) {
        return null
      }

      return (
        <div className="flex items-center">
          {paymentStatus.icon && (
            (paymentStatus.label === "Paid" && (
              <paymentStatus.icon className="mr-2 h-4 w-4 text-green-500" />
            ) || paymentStatus.label === "Unpaid" && (
              <paymentStatus.icon className="mr-2 h-4 w-4 text-red-500" />
            ) || paymentStatus.label === "Canceled" && (
              <paymentStatus.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            ) || paymentStatus.label === "Refunded" && (
              <paymentStatus.icon className="mr-2 h-4 w-4 text-yellow-500" />
            )
          ))}
          <span>{paymentStatus.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
