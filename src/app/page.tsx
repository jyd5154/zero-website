import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white text-header shadow-md font-sans">
        <div className="container mx-auto px-2 py-4 flex justify-start items-center">
          {/* Logo */}
          <div className="items-center ml-10 mr-10">
            {/* <img
              src="/favicon.ico"  // Replace with your logo path
              alt="Logo"
              className="w-10 h-10 rounded-full" // Circular logo
            /> */}
            <h1 className="text-2xl font-bold">Zero Deng</h1>
          </div>

          {/* Navbar */}
          <div className="hidden md:flex space-x-8 text-xl">
            <Link href="/about">About</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/code">Code</Link>
            <Link href="/data">Data</Link>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-footer text-footer-text py-6 text-xs">
        <div className="container mx-auto text-center">
          <p>©2020 - 2024 by Zero Deng</p>
        </div>
      </footer>
    </div>
  );
}
