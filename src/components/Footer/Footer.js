import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-16 ">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-2">
          <div>
            <div className="w-max mx-auto p-4">
            <div className="text-white text-2xl font-bold mb-6">
              <span className="text-gray-light">
                Maick Duarte
              </span>
            </div>
            <p className="text-gray-medium text-lg max-w-md mb-8">
              Desenvolvedor de Software, amante por tecnologia, e pronto para inovar.
            </p>
            <div className="flex gap-6 justify-center">
              <Link href="https://www.linkedin.com/in/maick-alves-duarte-1ba0ba1b8/" target="_blank"  className="text-gray-medium hover:text-gray-light hover:scale-110 duration-100 transiction-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://github.com/MaickDuarte" target="_blank" className="text-gray-medium hover:text-gray-light hover:scale-110 duration-100 transiction-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-max mx-auto p-4">
              <h3 className="text-gray-light text-xl font-display font-semibold mb-6 text-center">
                Contato
              </h3>
              <div className="flex flex-col gap-2">
                <Link href="mailto:maickduarte@hotmail.com" className="text-gray-medium hover:text-gray-light hover:scale-110 duration-100 transiction-all">
                  <p className="text-lg">maickduarte@hotmail.com</p>
                </Link>
                <Link href="https://wa.me/5511985757040" target="_blank" className="text-gray-medium hover:text-gray-light hover:scale-110 duration-100 transiction-all">
                  <div className="flex gap-2 justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
                    </svg>
                    <p className="text-lg">(11) 98575-7040</p>
                  </div>
                </Link>
                <p className="text-lg text-gray-medium">São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-max mx-auto mt-8">
          <p className="text-gray-medium">© 2025 Maick Duarte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}