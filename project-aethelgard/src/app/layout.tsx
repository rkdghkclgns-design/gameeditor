import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
    title: 'Aethelgard - Game Design Document Editor',
    description: '게임 기획자를 위한 GDD 에디터',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
                <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Aethelgard
                        </Link>
                        <div className="flex gap-6">
                            <Link href="/control" className="text-sm text-gray-400 hover:text-white transition-colors">
                                관제탑
                            </Link>
                            <Link href="/studio" className="text-sm text-gray-400 hover:text-white transition-colors">
                                스튜디오
                            </Link>
                        </div>
                    </div>
                </nav>
                <main className="pt-16">
                    {children}
                </main>
            </body>
        </html>
    )
}
