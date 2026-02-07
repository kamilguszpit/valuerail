const ASCII_LOGO = ` _    _     _     _      _   _   ___   ___     _     ___   _    
 \\ \\ / /   /_\\   | |    | | | | | __| | _ \\   /_\\   |_ _| | |   
  \\ V /   / _ \\  | |__  | |_| | | _|  |   /  / _ \\   | |  | |__ 
   \\_/   /_/ \\_\\ |____|  \\___/  |___| |_|_\\ /_/ \\_\\ |___| |____|`;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full space-y-12">
        <header className="text-center space-y-6">
          <pre
            className="font-bold inline-block text-[10px] sm:text-xs md:text-sm"
            style={{
              backgroundImage: 'linear-gradient(to right, #FF5F6D, #FFC371)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {ASCII_LOGO}
          </pre>
          <p className="text-[#666] text-sm">
            Your project is ready. Start building something amazing.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-[#ededed] text-lg font-semibold border-b border-[#333] pb-2">
            Quick Start
          </h2>
          <div className="space-y-2">
            <p className="text-[#666] text-sm">Start development server:</p>
            <pre>
              <span className="text-[#CD6052]">$</span> bun dev
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#ededed] text-lg font-semibold border-b border-[#333] pb-2">
            CLI Commands
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg border border-[#222] bg-[#111]">
              <code className="text-[#CD6052]">vrail add module</code>
              <p className="text-[#666] text-xs mt-1">Add modules to your project</p>
            </div>
            <div className="p-4 rounded-lg border border-[#222] bg-[#111]">
              <code className="text-[#CD6052]">vrail generate</code>
              <p className="text-[#666] text-xs mt-1">Generate components and pages</p>
            </div>
            <div className="p-4 rounded-lg border border-[#222] bg-[#111]">
              <code className="text-[#CD6052]">vrail doctor</code>
              <p className="text-[#666] text-xs mt-1">Check system configuration</p>
            </div>
            <div className="p-4 rounded-lg border border-[#222] bg-[#111]">
              <code className="text-[#CD6052]">vrail secrets</code>
              <p className="text-[#666] text-xs mt-1">Manage project secrets</p>
            </div>
          </div>
        </section>

        <footer className="pt-6 text-center border-t border-[#222]">
          <p className="text-[#666] text-xs">
            Edit <code>src/app/page.tsx</code> to get started
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs">
            <a href="https://valuerail.dev/docs" className="text-[#666] hover:text-[#CD6052]">
              Docs
            </a>
            <a href="https://github.com/kamilguszpit/valuerail" className="text-[#666] hover:text-[#CD6052]">
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/@valuerail/cli" className="text-[#666] hover:text-[#CD6052]">
              NPM
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
