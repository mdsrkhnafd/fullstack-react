import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { X } from "lucide-react"

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast relative rounded-lg px-4 py-3 shadow-lg border " +
            "bg-white text-black dark:bg-slate-950 dark:text-white",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton:
            "absolute top-2 left-2 text-muted-foreground hover:text-foreground" // 👈 moved to left
        },
        closeButton: <X className="w-4 h-4" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
