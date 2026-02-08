export default function Loading() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-[#0a0a0a]">
            <div className="space-y-6 text-center animate-pulse">
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
                    {` _    _     _     _      _   _   ___   ___     _     ___   _    
 \\ \\ / /   /_\\   | |    | | | | | __| | _ \\   /_\\   |_ _| | |   
  \\ V /   / _ \\  | |__  | |_| | | _|  |   /  / _ \\   | |  | |__ 
   \\_/   /_/ \\_\\ |____|  \\___/  |___| |_|_\\ /_/ \\_\\ |___| |____|`}
                </pre>
                <p className="text-[#666] text-sm mt-4">Loading...</p>
            </div>
        </main>
    )
}
