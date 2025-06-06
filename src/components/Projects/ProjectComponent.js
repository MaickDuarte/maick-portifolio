import Link from "next/link";

export default function ProjectComponent({ title, description, image, alt, link }) {
  return (
    <div class="bg-primary-light rounded-xl overflow-hidden">
      <img alt={alt} class="w-full h-64 object-cover" src={image} />
      <div class="p-6">
        <h3 class="text-2xl font-semibold mb-3">{title}</h3>
        <p class="text-gray-medium mb-6 text-sm">{description}</p>
        <Link href={link} class="bg-gray-button hover:bg-gray-button-hover text-white font-medium py-2 px-4 rounded-lg">Ver Projeto</Link>
      </div>
    </div>
  )
}