import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { clientSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Customers",
  description: "Customers tracker.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/customers/data/tasks.json")
  )

  const clients = JSON.parse(data.toString())

  return z.array(clientSchema).parse(clients)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your clients for this month!
          </p>
        </div>
        {/* <div className="flex items-center space-x-2">
          <UserNav />
        </div> */}
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
