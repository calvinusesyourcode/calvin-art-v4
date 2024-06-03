import { TailwindIndicator } from "@/components/tailwind-indicator"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
    title: {
        default: "calvin.art",
        template: `{{title}} | calvin.art`,
    },
    description: "portfolio",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export const viewport: Viewport = {
    themeColor: "#FAF9F6",
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning className="bg-[#FAF9F6] overflow-clip" style={{ height: "100vh", width: "100vw" }}>
            <head />
            <body className="font-sans antialiased bg-[#FAF9F6] size-full">
                <div className="flex flex-col flex-1 size-full">{children}</div>
                <TailwindIndicator />
            </body>
        </html>
    )
}
