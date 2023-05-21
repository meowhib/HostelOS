"use client"

import { Row } from "@tanstack/react-table"
import { Book, Copy, Mail, MailCheck, MoreHorizontal, Pen, Phone, Star, Tags, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { clientSchema } from "../data/schema"
import { MailQuestion } from "lucide-react"
import { MailWarning } from "lucide-react"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const client = clientSchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Copy className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Copy
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Phone className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Phone number
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Book className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Passport number
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Mail className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Send email
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <MailQuestion className="mr-2 h-3.5 w-3.5 text-yellow-500" />
              Confirmation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MailCheck className="mr-2 h-3.5 w-3.5 text-green-500" />
              Payment recieved
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MailWarning className="mr-2 h-3.5 w-3.5 text-red-500" />
              Problem with payment
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
