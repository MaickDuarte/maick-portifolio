import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      Página não encontrada, clique abaixo para voltar para a página inicial.
      <Link href="/">Voltar</Link>
    </div>
  )
}