import ProjectComponent from "./ProjectComponent";

export default function Projects({ title, description, imageUrl, link }) {
  return (
    <div class="container mx-auto px-4">
      <div class="py-16 md:py-24">
          <h2 class="text-4xl font-semibold mb-12 text-center">Meus Projetos</h2>
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ProjectComponent 
              title="Projeto em andamento"
              description="Em breve será disponibilizado"
              image="https://s2-g1.glbimg.com/Cv5FULM_IsXbLGrAW3jBHZsIq1A=/0x0:2048x1239/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/g/T/Bg5YFjTvmqNWbEzBZbqA/silvio-lourival-ribeiro-sbt1.jpg"
              alt="Descrição da imagem"
              link="/"
            />
            <ProjectComponent 
              title="Projeto em andamento"
              description="Em breve será disponibilizado"
              image="https://s2-g1.glbimg.com/Cv5FULM_IsXbLGrAW3jBHZsIq1A=/0x0:2048x1239/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/g/T/Bg5YFjTvmqNWbEzBZbqA/silvio-lourival-ribeiro-sbt1.jpg"
              alt="Descrição da imagem"
              link="/"
            />
            <ProjectComponent 
              title="Projeto em andamento"
              description="Em breve será disponibilizado"
              image="https://s2-g1.glbimg.com/Cv5FULM_IsXbLGrAW3jBHZsIq1A=/0x0:2048x1239/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/g/T/Bg5YFjTvmqNWbEzBZbqA/silvio-lourival-ribeiro-sbt1.jpg"
              alt="Descrição da imagem"
              link="/"
            />
            <ProjectComponent 
              title="Projeto em andamento"
              description="Em breve será disponibilizado"
              image="https://s2-g1.glbimg.com/Cv5FULM_IsXbLGrAW3jBHZsIq1A=/0x0:2048x1239/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/g/T/Bg5YFjTvmqNWbEzBZbqA/silvio-lourival-ribeiro-sbt1.jpg"
              alt="Descrição da imagem"
              link="/"
            />
          </div>
      </div>
    </div>
  )
}