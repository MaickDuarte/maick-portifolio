import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-darker w-full h-16 flex justify-between items-center px-16 border-b-1 border-gray-200 sticky top-0">
        <Link href="/" className="text-2xl font-bold">
        <span>&lt;Maick Duarte /&gt;</span>
        </Link>
        <div className="flex flex-row items-center justify-center gap-x-8">
            <Link href="/" className="hover:transform hover:scale-110">Home</Link>
            <Link href="/sobre" className="hover:transform hover:scale-110">Sobre</Link>
            <Link href="/contato" className="hover:transform hover:scale-110">Contato</Link>
        </div>
    </nav>
  )
}