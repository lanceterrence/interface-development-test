import './globals.css'
import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import clsx from "clsx";

const open_sans = Open_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Interface Development Test',
    description: 'Project made with Next.js, React, TypeScript, and TailwindCSS',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={clsx([
            open_sans.className,
        ])}>{children}</body>
        </html>
    )
}
