export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Faculdade de Direito
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
            Universidade Federal do Paraná
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
            Formando profissionais do direito com excelência acadêmica e compromisso social
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Conheça nossos cursos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
