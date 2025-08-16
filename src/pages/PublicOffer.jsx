import React from 'react'
import { Link } from 'react-router-dom'

function PublicOffer() {
  const handleLoginClick = () => {
    window.open('https://admin.novabonus.kz/', '_blank')
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
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Главная
              </Link>
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

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Публичная оферта
              </h1>
              <p className="text-xl text-gray-600">
                Условия использования сервиса NovaBonus
              </p>
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6">
                  {/* Заголовок документа */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Публичный договор</h2>
                    <p className="text-lg text-gray-600">г. Уральск</p>
                  </div>

                  {/* Вводная часть */}
                  <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Настоящий договор, в соответствии со ст.395 Гражданского кодекса Республики Казахстан является публичной офертой, представляющей собой адресованное неограниченному кругу юридических и физических лиц (достигших возраста совершеннолетия), на изложенных ниже условиях:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Индивидуальный предприниматель «Аникин», именуемое в дальнейшем «Правообладатель», в лице директора Аникин А.В., действующего на основании талона и юридическое лицо или индивидуальный предприниматель, далее именуемое «Пользователь», принявшее условия настоящей Публичного оферты (далее – «Договор»), именуемые в дальнейшем «Стороны», заключили настоящий Договор о нижеследующем.
                    </p>
                  </section>

                  {/* Раздел 1 - Определения и термины */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Определения и термины</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1.</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        В целях однозначной трактовки настоящего Договора нижеприведенные термины используются в следующем значении:
                      </p>
                      
                      <div className="space-y-3 ml-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.1.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Настоящий Договор является офертой в соответствии со ст.395 ГК РК и адресован неограниченному кругу лиц. Договор размещен в сети Интернет по адресу: <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.2.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Оферта - публичное предложение Правообладателя, адресованное любому лицу, заключить с ним Договор на существующих условиях, содержащихся в Договоре.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.3.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Акцепт - полное и безоговорочное принятие Пользователем условий Договора. Акцептом, в соответствии со статьей 396 ГК РК условий настоящего Договора, считается регистрация Пользователя на сайте Правообладателя.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.4.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Программа – программное обеспечение Правообладателя, используемое как на персональном компьютере, так и на мобильных устройствах. Программа относится к объектам авторских прав. Перечень и описание Программ Правообладателя размещено в сети Интернет на Сайте Правообладателя по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.5.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Правообладатель - юридическое лицо, заключившее с Пользователем Договор о предоставлении права использования простой (неисключительной) лицензии Программы.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.6.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Пользователь – юридическое или физическое лицо, или индивидуальный предприниматель, заключившее с Правообладателем Договор на условиях, содержащихся в настоящей оферте.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.7.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Логин и Пароль – Активационный набор символов для доступа к Программе.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.8.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Учетный период - период времени, кратный одному календарному месяцу.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.9.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Тарифы – прайс-лист Правообладателя, расположенный в сети Интернет по адресу: <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.10.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Аккаунт – служит для идентификации Пользователя в целях соблюдения настоящего Договора. К Аккаунту привязана вся информация, относящаяся к Пользователю.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.11.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Сервер - физический сервер для установки Программы.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.12.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Создатель Аккаунта – физическое лицо, представитель Пользователя, создавшее Аккаунт, путем регистрации на сайте Правообладателя по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.13.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Программное обеспечение – это комплекс программ: обеспечивающих обработку или передачу данных; предназначенных для многократного использования и применения разными Пользователями;
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.14.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Контрольно-кассовая машина – аппаратно-программный комплекс с функцией фиксации и передачи данных, обеспечивающие регистрацию и отображение информации о денежных расчетах, осуществляемых при реализации товаров, выполнении работ, оказании услуг;
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.15.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Личный кабинет – учетная запись Пользователя, доступ к которой предоставляется Правообладателем после регистрации на Сайте.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1.16.</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Активационный ключ – это комбинация букв, цифр и символов, генерируемый Правообладателем и предназначенный для активации программного обеспечения Правообладателя.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2.</h3>
                      <p className="text-gray-700 leading-relaxed">
                        В договоре могут быть использованы термины, не определенные в п. 1.1.1-1.1.18 Договора. В этом случае значение таких терминов определяется в соответствии с текстом Договора.
                      </p>
                    </div>
                  </section>

                  {/* Раздел 2 - Предмет договора */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Предмет договора</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель, по настоящему Договору, предоставляет Пользователю услугу генерации и выдачи уникального ключа (далее – Услуга) предназначенного для использования Программы, как самостоятельного программного обеспечения, так и в составе NovaBonus на условиях простой (неисключительной) лицензии, а Пользователь обязуется выплатить Правообладателю предусмотренное настоящим Договором вознаграждение, а также оплачивать дополнительные услуги, связанные с Продуктом, в предусмотренных настоящим Договором пределах Тарифов. Исключительные права на Программу принадлежат Правообладателю.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Передача неисключительных имущественных прав согласно п.2.1 настоящего Договора осуществляется при регистрации на сайте Правообладателя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь вправе использовать Программу на территории Республики Казахстан в целях собственной хозяйственной деятельности по функциональному назначению. Использование Программы за пределами Республики Казахстан может согласовываться Правообладателем дополнительно. Если Пользователь не согласен с условиями настоящего Договора, он должен немедленно прекратить использование Программы.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь чтобы воспользоваться Программой, нужно иметь компьютер, подключенный к сети Интернет либо мобильное устройство. Все вопросы, связанные с оборудованием Пользователя, программным обеспечением этого оборудование, подключением к сети Интернет решаются Пользователем самостоятельно.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">2.5.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Настоящим Договором Пользователь дает свое согласие на сбор, обработку и хранение персональных данных с последующей передачей третьим лица в целях проведения маркетинговых исследований.
                        </p>
                      </div>
                    </div>
                  </section>

                                    {/* Раздел 3 - Права и обязанности сторон */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Права и обязанности сторон. Использование программы</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Пользователь имеет право:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.1.1.</h4>
                            <p className="text-gray-700 leading-relaxed">На генерацию и получения лицензии</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.1.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу в соответствии с ее функциональным назначением, условиями настоящего Договора;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.1.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Получать круглосуточный и ежедневный доступ к Серверу за исключением случаев, указанных в настоящем Договоре;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.1.4.</h4>
                            <p className="text-gray-700 leading-relaxed">Отправить запрос Правообладателю на удаление своего Аккаунта и всех введенных Пользователем в Программу данных.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.1.5.</h4>
                            <p className="text-gray-700 leading-relaxed">Согласовывать вопросы, связанные с исполнением настоящего Договора, обращаясь к Правообладателю посредством электронной почты, адрес которого указан в п.11 Договора.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Пользователь обязан:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.1.</h4>
                            <p className="text-gray-700 leading-relaxed">Соблюдать авторские права Правообладателя.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу в пределах, установленных настоящим договором;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Производить оплату Правообладателю за оказанные Услуги в соответствии с условиями настоящего Договора;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.4.</h4>
                            <p className="text-gray-700 leading-relaxed">В случае сбора и обработки персональных данных с помощью Программы, строго соблюдать законодательство о защите персональных данных;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.5.</h4>
                            <p className="text-gray-700 leading-relaxed">Обеспечить сохранность своего Логина и Пароля (Логинов и Паролей представителей Пользователя). Пользователь обязуется не передавать свой Логин и Пароль (Логины и Пароли представителей Пользователя) третьим лицам;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.6.</h4>
                            <p className="text-gray-700 leading-relaxed">Сообщать незамедлительно Правообладателю обо всех случаях несанкционированного использования своего Логина и Пароля (Логинов и Паролей представителей Пользователя).</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.7.</h4>
                            <p className="text-gray-700 leading-relaxed">Пользователь при регистрации предоставляет полную и достоверную информацию индивидуального предпринимателя (если Пользователь является индивидуальным предпринимателем) либо данные юридического лица (если Пользователь является юридическим лицом) и обязуется поддерживать ее в актуальном состоянии.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.2.8.</h4>
                            <p className="text-gray-700 leading-relaxed">В период действия договора письменно извещать Правообладателя о смене реквизитов, изменении данных о юридическом лице или ИП, юридическом и фактическом адресе.</p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-yellow-800 text-sm">
                            <strong>Важно:</strong> Все действия, совершенные с использованием Логина и Пароля Пользователя (Логинов и Паролей представителей Пользователя), считаются действиями, совершенными самим Пользователем. Пользователь несет полную ответственность за все, что будет сделано в Программе и на Сервере под его Логином и Паролем (Логинами и Паролями представителей Пользователя).
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Пользователь не имеет права:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.1.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу для нарушения действующего законодательства Республики Казахстан и норм международного права;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу для нарушения или препятствия работе сторонних сервисов, систем, сайтов;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу для нарушения работы самой Программы или ее отдельных модулей;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.4.</h4>
                            <p className="text-gray-700 leading-relaxed">Копировать, воспроизводить, записывать в память ЭВМ или изменять Программу. Публиковать Программу, в том числе с целью ее копирования третьими лицами;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.5.</h4>
                            <p className="text-gray-700 leading-relaxed">Создавать программы производные от Программы, проникать в Программу с целью извлечения кода. Вскрывать технологию Программы;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.6.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать компоненты Программы для запуска сторонних приложений и приложений, не работающих на Программе;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.7.</h4>
                            <p className="text-gray-700 leading-relaxed">Осуществлять продажу, сдачу в аренду, во временное пользование, передачу третьим лицам Программы или каких-либо прав на Программу или на ее части;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.8.</h4>
                            <p className="text-gray-700 leading-relaxed">Использовать Программу для предоставления сетевых услуг на коммерческой основе.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.3.9.</h4>
                            <p className="text-gray-700 leading-relaxed">Требовать от Правообладателя возврата уплаченной за программу суммы.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.4.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Правообладатель имеет право:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.4.1.</h4>
                            <p className="text-gray-700 leading-relaxed">В случае нарушения Пользователем условий, оговоренных в п. 3.3., приостановить доступ к использованию Программы.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.4.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Если Пользователь предоставляет неверную информацию или у Правообладателя есть основания так полагать, Правообладатель имеет право приостановить или расторгнуть настоящий Договор. Правообладатель не проверяет предоставляемую Пользователем в целях исполнения настоящего Договора информацию и не несет ответственности перед любыми третьими лицами за точность и достоверность предоставленных данных.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.4.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Изменять условия настоящей оферты в одностороннем порядке без предварительного уведомления Пользователей.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.5.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Обязанности Правообладателя:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.5.1.</h4>
                            <p className="text-gray-700 leading-relaxed">Правообладатель обязан осуществить генерацию и передачу Пользователю лицензии для использования Программы не позднее 14 (трех) дней с момента оплаты Пользователем Услуги.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.5.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Консультировать Пользователя по вопросам, связанным с расчетом стоимости прав на использование Программы, его функциональностью, особенностями установки и эксплуатации на стандартных конфигурациях, поддерживаемых (популярных) операционных, почтовых и иных систем.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.5.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Немедленно информировать Пользователя о возникновении претензий третьих лиц, которые могут быть обращены на Пользователя или (в случае удовлетворения) могут привести к недействительности любого из условий настоящего Договора.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">3.5.4.</h4>
                            <p className="text-gray-700 leading-relaxed">Уведомлять Пользователя о всех изменениях в установленные настоящим Договором сроки.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 4 - Функциональные возможности личного кабинета */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Функциональные возможности личного кабинета</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Личный кабинет предоставляет Пользователю следующие функциональные возможности:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.1.</h4>
                            <p className="text-gray-700 leading-relaxed">Изменение Пароля от Личного кабинета;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Изменение Логина (номера телефона) от Личного кабинета;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.3.</h4>
                            <p className="text-gray-700 leading-relaxed">Подача заявки на изменение данных индивидуального предпринимателя (если Пользователь является индивидуальным предпринимателем) либо данных юридического лица (если Пользователь является юридическим лицом) на электронный адрес <a href="mailto:novabonus@mail.ru" className="text-blue-600 hover:text-blue-800 underline">novabonus@mail.ru</a>;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.4.</h4>
                            <p className="text-gray-700 leading-relaxed">Приобретение дополнительных услуг и торговых точек;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.5.</h4>
                            <p className="text-gray-700 leading-relaxed">Получение информации о статусе подключенных Продуктов;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">4.1.6.</h4>
                            <p className="text-gray-700 leading-relaxed">Получение информации относительно использования дополнительных Продуктов и торговых точек;</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Изменение данных, производимое Пользователем в соответствии с пунктом 4.1.3 Договора, вступает в силу после одобрения Правообладателем соответствующей заявки на изменение данных.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 5 - Стоимость лицензионного вознаграждения */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Стоимость лицензионного вознаграждения и порядок расчетов</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Стоимость оказания Услуги определяется согласно Тарифам, которые размещены по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Расчеты по настоящему договору осуществляются в тенге.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователи, юридические лица, оплачивают лиццензию по безналичному расчету, путем перевода денежных средств на расчетный счет Правообладателя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователи, физические лица, оплачивают лицензию по безналичному расчету или другими способами, которые указаны по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a>
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.5.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель в одностороннем порядке устанавливает Тарифы. Об изменении стоимости и условий Тарифов Правообладатель предупреждает Пользователя не позднее чем за 15 дней до вступления изменений в силу. При изменении Тарифов, указанных по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a> стоимость уже оплаченной Услуги не изменяется до истечения срока выбранного Тарифа, а в случае если Тариф бессрочный, то до конца текущего календарного года.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.6.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Возврат денежных средств Правообладателем не производится, т.к. Услуга Правообладателем оказана надлежащим образом.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">5.7.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Правообладатель вправе осуществить возврат денежных средств по требованию Пользователя, при условии:
                        </p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">5.7.1.</h4>
                            <p className="text-gray-700 leading-relaxed">Ошибочно зачисленные суммы на лицевой счет другого Пользователя.</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">5.7.2.</h4>
                            <p className="text-gray-700 leading-relaxed">Если списание денежных средств произошло в результате мошеннических действий третьих лиц при отсутствии вины и фактов нарушения Договора со стороны Пользователя.</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                          Перечень условий для возврата денежных средств не является исчерпывающим.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 6 - Порядок расчетов и принятия оказанных услуг */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Порядок расчетов и принятия оказанных услуг</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель предоставляет Пользователю доступ к Программе в пределах выбранного Тарифа. Стоимость дополнительных услуг и количество торговых точек указывается в тенге, отражается на Сайте и в Личном кабинете и действительна на момент их приобретения.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Для получения Услуги, дополнительным услугам и дополнительным торговым точкам пользователей с использованием лицензии Пользователь обязан предварительно пополнить свою лицензию (осуществить предоплату) на необходимую денежную сумму способами, указанными в пункте 6.3. настоящего Договора.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Оплата Лицензии осуществляется Пользователем с использованием следующих способов оплаты:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                          <li>проведения оплаты с использованием банковской карты;</li>
                          <li>проведения оплаты с банковского счета (в этом случае Правообладателем генерируется счет на оплату, доступный для Пользователя через Личный кабинет);</li>
                          <li>проведения оплаты через платежные терминалы и (или) платежные системы.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          В зависимости от способа Оплаты лицензии с Пользователем могут взиматься соответствующие комиссии (к примеру, при использовании платежных терминалов), за которые Правообладатель ответственности не несет. Также, Правообладатель не несет ответственность за денежные средства, переданные Пользователем сотруднику, Партнеру Правообладателя и третьим лицам наличным или безналичным путем.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.5.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Датой осуществления платежа (предоплаты) считается дата зачисления денежных средств на Лицевой счет Пользователя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.6.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Услуга считается оказанной с момента генерации лицензии Правообладателем.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.7.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Неиспользованные денежные средства, перечисленные Пользователем Правообладателю в соответствии с пунктом 6.3 Договора, по истечению 3 (Трех) лет с момента их перечисления возврату не подлежат.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.8.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          В течение 15 (пятнадцати) календарных дней с момента активации лицензии Пользователем, Правообладатель выписывает Пользователю электронный счет-фактуру.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.9.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          По запросу Пользователя, Правообладатель в течение 15 (пятнадцати) календарных дней с момента активации лицензии, Правообладатель формирует акт выполненных работ (оказанных услуг), доступный для загрузки Пользователем из Личного кабинета на персональный компьютер (либо иное техническое устройство) Пользователя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.10.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь в течение 15 (пятнадцати) календарных дней с момента формирования Правообладателем акта выполненных работ (оказанных услуг), предоставляет Правообладателю электронный образ (сканированный вариант) подписанного Пользователем и скрепленного печатью Пользователя (при ее наличии) акта выполненных работ (оказанных услуг) и загружает в Личный кабинет. В случае непредоставления электронного образа (сканированного варианта) указанного акта в срок, установленный настоящим пунктом, Правообладатель вправе заблокировать доступ Пользователя к функциональным возможностям Программы.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.11.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь (его представитель) находящийся в городе Уральск вправе получить оригинал акта выполненных работ (оказанных услуг) самовывозом с офиса Правообладателя, по адресу, указанному в разделе 13 настоящего Договора.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.12.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Отправка оригинала акта выполненных работ (оказанных услуг) Пользователем, находящимся за пределами города Уральск, осуществляется по письменному запросу Пользователя, отправленного на электронный адрес <a href="mailto:novabonus@mail.ru" className="text-blue-600 hover:text-blue-800 underline">novabonus@mail.ru</a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.13.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          В случае, если Пользователь желает получить оригинал акта выполненных работ (оказанных услуг) и не может самостоятельно получить оригинал акта выполненных работ (оказанных услуг) нарочно, то расходы по оплате почтовых (курьерских) услуг, Пользователь несет самостоятельно.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">6.14.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь вправе, путем направления запроса на электронный адрес <a href="mailto:novabonus@mail.ru" className="text-blue-600 hover:text-blue-800 underline">novabonus@mail.ru</a> с указанием своего ИИН/БИН и периода, запросить акт сверки. Запрос обрабатывается в течении 15 рабочих дней.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 7 - Акцепт договора */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Акцепт договора</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Безоговорочным принятием Пользователем настоящего Договора является регистрация на сайте Правообладателя по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a> либо использование любой из функций Программного обеспечения или в качестве пользователя в Программе на Сервере Правообладателя.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 8 - Ответственность сторон */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Ответственность сторон</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          За ненадлежащее исполнение и/или неисполнение обязательств по настоящему Договору Стороны несут ответственность в соответствии с действующим законодательством Республики Казахстан.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Стороны освобождаются от ответственности за неисполнение и/или ненадлежащее исполнение обязательств по Договору при возникновении непреодолимых препятствий, под которыми понимаются стихийные бедствия, массовые беспорядки, запретительные действия властей и иные форс-мажорные обстоятельства.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">8.3.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">Правообладатель не несет ответственности за:</p>
                        <div className="space-y-3 ml-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">8.3.1.</h4>
                            <p className="text-gray-700 leading-relaxed">точность и верность введенных Пользователя, данных индивидуального предпринимателя (если регистрация осуществляется/осуществлялась от имени индивидуального предпринимателя) либо данных юридического лица (если регистрация осуществляется/осуществлялась от имени юридического лица);</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">8.3.2.</h4>
                            <p className="text-gray-700 leading-relaxed">точность и верность указанных Пользователем и отраженных в Личном кабинете банковских реквизитов Пользователя;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">8.3.3.</h4>
                            <p className="text-gray-700 leading-relaxed">корректность и работоспособность платежных систем, банков, терминалов оплаты;</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">8.3.4.</h4>
                            <p className="text-gray-700 leading-relaxed">Программное обеспечение третьих лиц, интегрированное с Программой Правообладателя, а также за последствие и результатом работы такой интеграции, независимо от того, кем была выполнена такая интеграция.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">8.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель не несет ответственности за убытки, которые Пользователь может понести в результате того, что его Логин и Пароль от Личного кабинета стали известны третьему лицу. Настоящий пункт не применяется в случае, если Логин и Пароль Пользователя от Личного кабинета стали известны третьему лицу по вине Правообладателя.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 9 - Форс-мажор */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Форс-мажор</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Стороны не несут ответственности за нарушение обязательств по Договору, наступивших вследствие обстоятельств непреодолимой силы, которые Сторона не могла ни предвидеть, ни предотвратить, ни избежать. Срок исполнения обязательств по Договору сдвигается соразмерно времени, в течении которого действовали указанные обстоятельства.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          К обстоятельствам непреодолимой силы относятся: землетрясения, наводнения и другие стихийные бедствия, пожары, аварии на транспорте, аварии провайдеров интернет, перебои энергоснабжения, мятежи, гражданские беспорядки, забастовки персонала, война и военные действия, эмбарго, действия органов власти и публикации нормативных актов запрещающего характера, и другие непредвиденные обстоятельства и неподконтрольные Сторонам события и явления, не ограничиваясь указанными.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">9.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь, который в силу обстоятельств непреодолимой силы, не исполняет Договор обязан немедленно (но не позднее 3 (трех) рабочих дней) письменно уведомить об этом Правообладателя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">9.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель, в случае невозможности соблюдать Договор при наступлении обстоятельств непреодолимой силы, обязан незамедлительно (но не позднее 3 (трех) рабочих дней) уведомить Пользователя путем размещения информации на сайте по адресу <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a> или по электронной почте.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 10 - Срок действия договора */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Срок действия договора</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">10.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Договор вступает в действие с момента его акцепта Пользователем. Договор действует неопределенный срок до момента отказа Пользователем работы в Программе/Программах Правообладателя.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">10.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель имеет право вносить изменения в Договор в одностороннем порядке. В случае, если Пользователь не согласен с внесенными изменениями, он обязан незамедлительно прекратить использование Программы. За исключением случаев, прямо оговоренных в настоящем Договоре.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">10.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель имеет права отключить Пользователя от Сервера, Программы и удалить Аккаунт, в случае нарушения Пользователем
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">10.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Удаление Аккаунта Пользователя автоматически влечет расторжение настоящего Договора.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 11 - Прочие условия */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Прочие условия</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Правообладатель гарантирует наличие у него исключительных имущественных прав в необходимом объеме. Правообладатель гарантирует, что Программы, не содержат никаких заимствований либо частей, которые могут рассматриваться как нарушение авторских и/или смежных прав третьих лиц.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Взаимоотношения Сторон по настоящему договору регулируются действующим законодательством Республики Казахстан.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Если споры между Правообладателем и Пользователем не урегулируются путем переговоров Сторон, они подлежат рассмотрению в Специализированном межрайонном экономическом суде г. Астаны.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Пользователь обязан соблюсти досудебный претензионный порядок урегулирования споров перед обращением в суд. Правообладатель обязан ответить на досудебную претензию в течение 30 (тридцати) рабочих дней с момента ее получения.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.5.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          В случае если одно или более положений настоящего Договора являются недействительными по какой-либо причине и/или не имеющими юридической силы, такая недействительность никак не влияет на действительность Договора в целом или других положений Договора.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.6.</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Уведомления по настоящему Договору направляются:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                          <li>Пользователю – на номер телефона Пользователя, указанный им при регистрации;</li>
                          <li>Правообладателю – на адрес электронной почты Правообладателя, указанного в п.11 Договора.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.7.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Любые уведомления, извещения и письма направляются Пользователем в сторону Правообладателя на адрес, указанный в разделе 11 настоящего договора.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">11.8.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Стороны также допускают, использование и признают действительным факсимильное воспроизведение печатей и подписей уполномоченных на заключение Договора лиц при заключении Договора, а также при оформлении иных необходимых документов, являющихся обязательными и необходимыми для выполнения условий Договора. При этом факсимильные печать и подпись уполномоченного лица будут иметь такую же силу, как и подписанные печать и подпись уполномоченного лица.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 12 - Конфиденциальность */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Конфиденциальность</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.1.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Стороны обязуются не разглашать конфиденциальную информацию и не использовать ее, кроме как в целях исполнения обязательств по настоящему Договору.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.2.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Конфиденциальной считается информация, полученная в рамках выполнения настоящего Договора и содержащая коммерческую тайну либо иную охраняемую законом тайну Стороны, или информация, которая прямо названа Сторонами конфиденциальной. Такая информация, если она раскрывается в письменной форме, помечается и идентифицируется в качестве конфиденциальной или несет на себе иное соответствующее обозначение, либо, если она раскрывается в устной или визуальной форме, то раскрывающая ее Сторона идентифицирует такую информацию в качестве конфиденциальной в момент раскрытия, а затем кратко излагает ее в письменной форме и предоставляет в таком виде получателю в течение 30 (Тридцати) дней с момента ее раскрытия в устной или визуальной форме.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.3.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Сторона, не выполнившая условия конфиденциальности, несет ответственность в соответствии с законодательством Республики Казахстан.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.4.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Конфиденциальная информация может предоставляться компетентным государственным органам в случаях и в порядке, предусмотренном действующим законодательством, что не влечет за собой наступление ответственности за ее разглашение.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.5.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Информация не будет отнесена к конфиденциальной, если к информации имеется свободный доступ на законном основании, и Сторона, являющаяся собственником информации, не принимает необходимые меры к охране ее конфиденциальности.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">12.6.</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Сам факт заключения и предмет настоящего Договора не являются конфиденциальными и могут использоваться Сторонами в рекламно-маркетинговых целях.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Раздел 13 - Реквизиты Правообладателя */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Реквизиты Правообладателя</h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-400">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Индивидуальный предприниматель «Аникин»</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="text-gray-700">
                              <span className="font-semibold">Компания:</span> ИП АНИКИН
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold">Адрес:</span> Казахстан, город Уральск, ул. Шолохова, 11/5                        </p>
                            <p className="text-gray-700">
                              <span className="font-semibold">БИН (ИИН):</span> 511210302176
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-gray-700">
                              <span className="font-semibold">Банк:</span> АО "Kaspi Bank"
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold">КБе:</span> 19
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold">БИК:</span> CASPKZKA
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold">Номер счёта:</span> KZ25722S000033069020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Заключительная информация */}
                  <div className="mt-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Документ полностью загружен
                      </h3>
                      <p className="text-green-700 text-sm">
                        Публичная оферта содержит все необходимые разделы и готова к использованию.
                      </p>
                    </div>
                  </div>

                  {/* Информация о документе */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Информация о документе:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Документ размещен в сети Интернет</li>
                          <li>• Является публичной офертой в соответствии со ст.395 ГК РК</li>
                          <li>• Акцепт осуществляется путем регистрации на сайте</li>
                          <li>• Действует с момента акцепта Пользователем</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Контактная информация:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Сайт: <a href="http://NovaBonus.kz" className="text-blue-600 hover:text-blue-800 underline">http://NovaBonus.kz</a></li>
                          <li>• Email: <a href="mailto:novabonus@mail.ru" className="text-blue-600 hover:text-blue-800 underline">novabonus@mail.ru</a></li>
                          <li>• Адрес: Казахстан, город Уральск, ул. Шолохова, 11/5</li>
                          <li>• Дата обновления: {new Date().toLocaleDateString('ru-RU')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PublicOffer
