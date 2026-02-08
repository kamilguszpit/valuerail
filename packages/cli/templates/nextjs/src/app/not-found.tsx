import Link from 'next/link'

const ASCII_404 = ` _  _    ___   _  _   
| || |  / _ \\ | || |  
| || |_| (_) || || |_ 
|__   _|\\___/ |__   _|
   |_|           |_|  `;

export default function NotFound() {
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
                    {ASCII_404}
                </pre>
                <h2 className="text-[#ededed] text-xl font-semibold">Page Not Found</h2>
                <p className="text-[#666] text-sm">Could not find requested resource</p>
                <div className="pt-0">
                    <Link
                        href="/"
                        className="inline-block px-6 py-2 rounded-lg border border-[#333] hover:border-[#CD6052] text-[#666] hover:text-[#CD6052] text-sm transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    )
}
