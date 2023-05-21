import {
  HelpCircle,
  Circle,
  ArrowUpCircle,
  CheckCircle2,
  XCircle,
  ArrowDownCircle,
  AlertCircle,
} from "lucide-react"

export const reservations = [
  {
    value: "booking",
    label: "Booking",
  },
  {
    value: "hostelworld",
    label: "Hostelworld",
  },
  {
    value: "expedia",
    label: "Expedia",
  },
  {
    value: "agoda",
    label: "Agoda",
  },
]

export const paymentStatuses = [
  {
    label: "Paid",
    value: "paid",
    icon: CheckCircle2,
  },
  {
    label: "Unpaid",
    value: "unpaid",
    icon: AlertCircle,
  },
  {
    label: "Canceled",
    value: "canceled",
    icon: XCircle,
  },
  {
    label: "Refunded",
    value: "refunded",
    icon: ArrowDownCircle,
  },
]
