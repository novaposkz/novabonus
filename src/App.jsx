import './App.css'

function App() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+77067230198'
    const message = 'Здравствуйте! Я хочу узнать больше о NovaBonus для моего бизнеса.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLoginClick = () => {
    window.open('https://admin.novabonus.kz/', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with Login Button */}
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={handleLoginClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md"
        >
          Войти в кабинет
        </button>
      </div>

      <div className="px-4 py-16">
        <div className="text-center">
          {/* Logo/Brand Section */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Nova<span className="text-blue-600">Bonus</span>
            </h1>
            <p className="text-xl text-gray-600">Бонусная программа для бизнеса в Казахстане</p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Увеличьте продажи и лояльность клиентов
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Для бизнеса
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Создайте собственную бонусную программу и привлекайте новых клиентов. 
                    Наша платформа поможет вам увеличить продажи и удержать постоянных покупателей 
                    с помощью персональных предложений и скидок.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Для клиентов
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Получайте бонусы за покупки в любимых магазинах Казахстана. 
                    Копите баллы, обменивайте их на скидки и получайте эксклюзивные предложения 
                    от партнеров NovaBonus.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Быстрый запуск</h3>
                <p className="text-sm text-gray-600">Настройте бонусную программу за несколько минут</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Мобильное приложение</h3>
                <p className="text-sm text-gray-600">Удобное управление бонусами в смартфоне</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Аналитика</h3>
                <p className="text-sm text-gray-600">Подробная статистика и отчеты по продажам</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Готовы начать?
              </h3>
              <p className="text-blue-100 mb-6">
                Присоединяйтесь к NovaBonus и увеличьте прибыль вашего бизнеса уже сегодня
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
              >
                <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
