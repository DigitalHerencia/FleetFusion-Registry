"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn("rounded-lg border", className)}
      showOutsideDays={showOutsideDays}
      // If using react-day-picker v8+, custom navigation icons are not supported via props.
      // If you want to customize navigation, you must use custom components or CSS.
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
