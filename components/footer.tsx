export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Direito UFPR</h3>
            <p className="text-gray-300 mb-4">
              Faculdade de Direito da Universidade Federal do Paraná
            </p>
            <p className="text-gray-300">
              Formando profissionais do direito com excelência e compromisso social
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Cursos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Admissão</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Biblioteca</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Eventos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Curitiba, PR</li>
              <li>Brasil</li>
              <li>Email: direito@ufpr.br</li>
              <li>Telefone: (41) 3360-5000</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Direito UFPR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
