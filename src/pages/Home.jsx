import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+77067230198'
    const message = 'Здравствуйте! Я хочу узнать больше о NovaBonus для моего бизнеса.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLoginClick = () => {
    window.open('https://admin.novabonus.kz/', '_blank')
  }

  const handleDemoClick = () => {
    handleWhatsAppClick()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Home Link */}
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              NovaBonus
            </Link>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <button 
                onClick={handleLoginClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Войти в кабинет
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Создайте программу лояльности, которая увеличивает доход и возвращает клиентов
              </h1>
              
              <div className="space-y-6 mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 items-center lg:items-start">
                  <span className="text-4xl lg:text-5xl font-bold text-blue-600">До</span>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 items-center lg:items-start">
                    <span className="text-7xl lg:text-8xl font-bold text-blue-600">3x</span>
                    <p className="text-2xl lg:text-3xl text-gray-600">Удержание клиентов</p>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 items-center lg:items-start">
                  <span className="text-4xl lg:text-5xl font-bold text-blue-600">До</span>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 items-center lg:items-start">
                    <span className="text-7xl lg:text-8xl font-bold text-blue-600">70%</span>
                    <p className="text-2xl lg:text-3xl text-gray-600">Дополнительного дохода</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleDemoClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Получить демо
              </button>
            </div>
            
            {/* Right Side - Image */}
            <div className="text-center">
              <img 
                src="/images/partners/hero.webp" 
                alt="NovaBonus Hero" 
                className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Какие преимущества и возможности вас ждут?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Block - Loyalty Programs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Различные программы лояльности
              </h3>
              <p className="text-gray-600 mb-8">
                Предложите своим клиентам эффективные программы, стимулирующие повторные покупки.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-gray-700">Бонусы и скидки</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎟️</span>
                  <span className="text-gray-700">Купоны и сертификаты</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔄</span>
                  <span className="text-gray-700">Накопительные акции</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎂</span>
                  <span className="text-gray-700">Бонусы на день рождения</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-gray-700">Клиентские уровни: Gold, Platinum, Premium и т.д.</span>
                </div>
              </div>
              
              <p className="text-gray-600 font-medium">
                Механики лояльности помогают увеличить средний чек и удержание клиентов.
              </p>
            </div>
            
            {/* Right Block - Push Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Push-уведомления – персонализированный контакт для повышения лояльности клиентов
              </h3>
              <p className="text-gray-600 mb-8">
                Автоматически напоминайте клиентам о выгодных предложениях и вовлекайте их в повторные покупки!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-bell text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Оповещайте о новостях и акциях</h4>
                    <p className="text-gray-600">Мгновенно информируйте клиентов о скидках и акциях</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-users text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Настраивайте персонализированные рассылки</h4>
                    <p className="text-gray-600">Сегментируйте аудиторию и отправляйте уведомления выбранным клиентам</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Гео-уведомления в реальном времени</h4>
                    <p className="text-gray-600">Отправляйте push-уведомления, когда клиент находится рядом с вашим заведением</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 font-medium">
                Push-уведомления помогают увеличить продажи без лишних затрат на рекламу!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Цифровые карты лояльности – всегда под рукой
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Позвольте клиентам хранить вашу карту лояльности прямо в смартфоне!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-bell text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Оповещайте о новостях и акциях</h3>
                    <p className="text-gray-600">Мгновенно информируйте клиентов о скидках и акциях</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-users text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Настраивайте персонализированные рассылки</h3>
                    <p className="text-gray-600">Сегментируйте аудиторию и отправляйте уведомления выбранным клиентам</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Гео-уведомления в реальном времени</h3>
                    <p className="text-gray-600">Отправляйте push-уведомления, когда клиент находится рядом с вашим заведением</p>
                  </div>
                </div>
              </div>

              <p className="text-xl font-semibold text-blue-600 mt-8">
                Цифровая карта – удобное и современное решение для вашего бизнеса!
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className="text-center">
              <img 
                src="/images/partners/cards.webp" 
                alt="Digital Loyalty Cards" 
                className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Page Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Страница заведения в системе лояльности NovaBonus
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <p className="text-xl text-gray-600 mb-8">
                Удобный доступ для клиента ко всей важной информации о вашем бизнесе в одном месте.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес и контактные данные</h3>
                    <p className="text-gray-600">Клиенты легко найдут вас и свяжутся с вами</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-clock text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Актуальное расписание</h3>
                    <p className="text-gray-600">Точные часы работы вашего бизнеса</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-images text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Фотогалерея</h3>
                    <p className="text-gray-600">Создайте привлекательный визуальный образ вашего заведения</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-utensils text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Меню в удобном формате</h3>
                    <p className="text-gray-600">Клиенты смогут заранее ознакомиться с вашим меню и ценами прямо на странице заведения</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-share-alt text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрые ссылки</h3>
                    <p className="text-gray-600">На социальные сети, сайт, мессенджеры для удобной коммуникации</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-blue-600">
                Дайте клиентам максимум информации и удобства
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className="text-center">
              <img 
                src="/images/partners/cards_locations.webp" 
                alt="Business Page in NovaBonus" 
                className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Автоматизация взаимодействий с клиентами и программы лояльности
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Настройте персонализированную коммуникацию с клиентами, которая работает без вашего участия!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-birthday-cake text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Поздравления с Днём Рождения</h3>
                    <p className="text-gray-600">Автоматически начисляйте бонусы и делайте клиенту приятные сюрпризы.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-undo text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Возвращайте ушедших клиентов</h3>
                    <p className="text-gray-600">Отправляйте персональные предложения тем, кто давно не совершал покупок.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Собирайте отзывы на автопилоте</h3>
                    <p className="text-gray-600">Отправляйте запрос на отзыв после покупки и повышайте рейтинг компании.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-clock text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Контролируйте срок действия бонусов</h3>
                    <p className="text-gray-600">Создавайте акционные предложения с ограниченным сроком, чтобы стимулировать спрос.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-blue-600">
                NovaBonus автоматизирует заботу о ваших клиентах – а вы сосредотачиваетесь на развитии бизнеса!
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className="text-center">
              <img 
                src="/images/partners/automation.webp" 
                alt="Customer Interaction Automation" 
                className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Public Offer Link */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <Link 
            to="/public-offer"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            Публичная оферта
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
