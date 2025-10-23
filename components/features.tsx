const features = [
  {
    title: 'Excelência Acadêmica',
    description: 'Corpo docente qualificado e estrutura moderna para o melhor aprendizado.',
    icon: '🎓'
  },
  {
    title: 'Compromisso Social',
    description: 'Formação de profissionais conscientes de sua responsabilidade social.',
    icon: '⚖️'
  },
  {
    title: 'Tradição e Inovação',
    description: 'Mais de 100 anos de tradição combinados com ensino moderno.',
    icon: '🏛️'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a UFPR?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa faculdade oferece uma formação completa e de qualidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
