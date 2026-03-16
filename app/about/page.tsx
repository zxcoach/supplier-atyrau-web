"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Навигация */}
      <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-black text-2xl tracking-tighter text-[#1f2937]"
          >
            SUPAT <span className="text-[#e66c24]"></span>
          </Link>
          <Link
            href="/"
            className="group text-sm font-bold text-gray-500 hover:text-[#e66c24] transition-colors flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            Вернуться на главную
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-[#1f2937] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e66c24] skew-x-12 translate-x-32 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <span className="text-[#e66c24] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            Официальный поставщик
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">
            О компании <br />
            <span className="text-transparent stroke-text">SUPAT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
            Поставщик технологий европейских лидеров для нефтегазовой и
            промышленной отрасли Казахстана с 2013 года.
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Левая колонка: Текст */}
          <div className="lg:col-span-2 space-y-12 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50">
            <div className="prose prose-xl prose-gray max-w-none">
              <h2 className="text-3xl font-black text-gray-900 uppercase italic mb-6">
                Уважаемые господа!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Представляем Вашему вниманию компанию{" "}
                <strong>ТОО «SUPAT»</strong>. Мы специализируемся на комплексных
                поставках абразивного порошка (грита) и профессионального
                оборудования для антикоррозийной защиты металлоконструкций,
                резервуаров, а также морских и речных судов.
              </p>
              <div className="my-10 p-8 bg-gray-50 border-l-8 border-[#e66c24] rounded-r-3xl">
                <p className="text-gray-800 font-medium italic m-0">
                  «Приоритет нашей компании — надежный и качественный товар,
                  конкурентоспособные цены и оперативность. Квалифицированные
                  консультации и современное обеспечение делают нас партнером на
                  долгие годы.»
                </p>
              </div>
            </div>

            {/* Бренды и партнеры */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1f2937] flex items-center gap-3">
                <span className="w-8 h-1 bg-[#e66c24]"></span>
                Наши ключевые партнеры
              </h3>

              <div className="grid gap-6">
                {[
                  {
                    name: "CLEMCO & CONTRACOR (Германия)",
                    desc: "Крупнейший в мире производитель и ведущий разработчик технологий для очистки и упрочнения поверхностей.",
                  },
                  {
                    name: "WIWA (Германия)",
                    desc: "Высококачественное окрасочное оборудование для судостроения, нефтегазодобычи и огнезащиты.",
                  },
                  {
                    name: "ПРОМРЕСУРСЭКОЛОГИЯ (РФ)",
                    desc: "Лидер по производству экологичного абразивного порошка (шлаковый песок, грит, garnet).",
                  },
                  {
                    name: "HAMMELMAN",
                    desc: "Мировой изготовитель систем водоструйного оборудования сверхвысокого давления.",
                  },
                  {
                    name: "MOLYKOTE",
                    desc: "Реализация специализированных смазочных материалов (1000, 111 и аналоги).",
                  },
                ].map((partner, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl border border-gray-100 hover:border-[#e66c24]/30 hover:bg-gray-50 transition-all"
                  >
                    <h4 className="font-black text-[#e66c24] mb-2 uppercase tracking-wide">
                      {partner.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка: Карточки данных */}
          <div className="space-y-8">
            {/* ТТХ Компании */}
            <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#1f2937] p-6 text-white text-center">
                <h3 className="font-bold uppercase tracking-widest text-sm text-[#e66c24]">
                  Сводка данных
                </h3>
              </div>
              <div className="p-8 space-y-5 text-sm">
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Название
                  </span>
                  <span className="font-bold text-right">
                    ТОО Supplier Atyrau
                  </span>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Тип
                  </span>
                  <span className="font-bold text-right">
                    Дистрибьютор / Реселлер
                  </span>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Основано
                  </span>
                  <span className="font-bold text-right">2013 год</span>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Штат
                  </span>
                  <span className="font-bold text-right">5-10 человек</span>
                </div>
                <div className="flex justify-between items-end border-b pb-2">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Капитал
                  </span>
                  <span className="font-bold text-right">До $10,000</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 uppercase text-[10px] font-bold">
                    Сертификат
                  </span>
                  <span className="font-bold text-green-600">
                    ISO 9001:2000
                  </span>
                </div>
              </div>
            </div>

            {/* Доставка и Оплата */}
            <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Image
                  src="/images/icon-quality.svg"
                  alt="Quality"
                  width={80}
                  height={80}
                  className="invert"
                />
              </div>
              <h3 className="text-xl font-black mb-6 uppercase text-[#e66c24]">
                Логистика
              </h3>
              <div className="space-y-6 text-sm">
                <div className="space-y-2">
                  <p className="font-bold text-gray-300 border-l-2 border-[#e66c24] pl-3 uppercase text-xs">
                    Доставка
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Самовывоз</li>
                    <li>
                      • Курьером —{" "}
                      <strong className="text-white">Бесплатно</strong>
                    </li>
                    <li>• Почтой / Транспортной компанией</li>
                  </ul>
                  <p className="text-[11px] text-gray-500 italic mt-2">
                    Отправка по РК в течение 1 дня после оплаты.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-gray-300 border-l-2 border-[#e66c24] pl-3 uppercase text-xs">
                    Оплата
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Наличный расчет</li>
                    <li>• Безналичный расчет</li>
                  </ul>
                  <p className="font-mono bg-white/5 p-3 rounded text-[11px] text-[#e66c24] break-all">
                    БИН/IBN: KZ34914032203KZ025A8
                  </p>
                </div>
              </div>
            </div>

            {/* Гарантия */}
            <div className="bg-[#e66c24] rounded-3xl p-6 text-white text-center">
              <p className="text-xs font-black uppercase mb-1 tracking-tighter">
                Гарантия качества
              </p>
              <p className="text-[13px] font-medium opacity-90">
                Предоставляется на определенные позиции. Уточняйте у менеджера.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* География */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center border border-gray-100">
          <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase">
            География экспорта
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Осуществляем бесперебойные поставки промышленного оборудования в
            регионы Казахстана и страны СНГ.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Казахстан (Все регионы)",
              "Россия",
              "Армения",
              "Азербайджан",
              "Беларусь",
              "Грузия",
              "Кыргызстан",
              "Молдова",
              "Таджикистан",
              "Туркменистан",
              "Узбекистан",
            ].map((country) => (
              <span
                key={country}
                className="bg-white px-6 py-3 rounded-2xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-[#e66c24] hover:text-[#e66c24] transition-all cursor-default shadow-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-xs py-10 border-t border-gray-50">
        © 2026 ТОО SUPAT – Industrial Supply Company (A brand of Supplier Atyrau
        LLP). Информация на сайте не является публичной офертой.
      </footer>

      {/* Специальный стиль для текста-контура (можно вынести в глобальные CSS) */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </main>
  );
}
