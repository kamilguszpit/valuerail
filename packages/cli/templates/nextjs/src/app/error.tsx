'use client'

import { useEffect } from 'react'

const ASCII_ERROR = ` ___   ___   ___   ___   ___ 
| __| | _ \\ | _ \\ | _ \\ | _ \\
| _|  |   / |   / | (_) ||   /
|___| |_|_\\ |_|_\\  \\___/ |_|_\\`;

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
            <div className="space-y-6">
                <pre
                    className="font-bold inline-block text-[10px] sm:text-xs md:text-sm leading-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #FF5F6D, #FFC371)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}
                >
                    {ASCII_ERROR}
                </pre>
                <h2 className="text-[#ededed] text-xl font-semibold">Something went wrong!</h2>
                <div className="pt-0">
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="inline-block px-6 py-2 rounded-lg border border-[#333] hover:border-[#CD6052] text-[#666] hover:text-[#CD6052] text-sm transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </div>
        </main>
    )
}
