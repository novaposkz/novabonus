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
      {/* Header with Navigation */}
      <div className="absolute top-4 right-4 z-10 flex items-center space-x-4">
        <Link 
          to="/public-offer"
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          Публичная оферта
        </Link>
        <button 
          onClick={handleLoginClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
        >
          Войти в кабинет
        </button>
      </div>

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
    </div>
  )
}

export default Home
