import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "border-4 border-black rounded flex flex-col shadow-shadow gap-6 pb-6 bg-background text-foreground font-base",
        className,
      )}
      {...props}
    />
  )
}

function CardHeaderBar({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header-bar"
            className={cn("flex bg-primary justify-end-safe rounded-t h-9 gap-2 border-b-3 border-black", className)}
            {...props}
        >
            <div className="flex gap-2 my-auto mr-2">
                <div className="rounded-full h-4 w-4 bg-white border-3 border-black"></div>
                <div className="rounded-full h-4 w-4 bg-white border-3 border-black"></div>
                <div className="rounded-full h-4 w-4 bg-white border-3 border-black"></div>
            </div>
        </div>
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading leading-none", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-md font-base", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardHeaderBar,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
}
