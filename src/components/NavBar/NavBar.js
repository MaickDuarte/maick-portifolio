import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-16 border-b-1 border-gray-200">
        <Link href="/" className="text-2xl font-bold">
        <span>&lt;Maick Duarte /&gt;</span>
        </Link>
        <div className="flex flex-row items-center justify-center gap-x-8">
            <Link href="/">Inicio</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
        </div>
    </nav>
  )
}