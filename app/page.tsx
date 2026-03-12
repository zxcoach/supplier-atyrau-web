"use client";

import Image from "next/image";
import Link from "next/link"; // Добавили импорт для навигации
import { useState } from "react";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("kilimova-oksana@mail.ru");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const productsData = [
    {
      img: "product-1.jpg",
      title: "Абразивные\nматериалы",
      type: "link",
      href: "/abrasives",
    },
    {
      img: "product-2.jpg",
      title: "Пескоструйное\nоборудование",
      type: "dropdown",
      options: [
        { name: "Clemco", link: "/docs/clemco.pdf" },
        { name: "Contracor", link: "/docs/contracor.pdf" },
      ],
    },
    {
      img: "product-3.jpg",
      title: "Покрасочное\nоборудование",
      type: "link",
      href: "/docs/wiwa.pdf",
    },
    {
      img: "product-4.jpg",
      title: "Расходные\nматериалы",
      type: "dropdown",
      options: [
        { name: "Clemco", link: "/docs/clemco.pdf" },
        { name: "Contracor", link: "/docs/contracor.pdf" },
        { name: "Wiwa", link: "/docs/wiwa.pdf" },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900 font-sans">
      {/* 1. ГЛАВНЫЙ ЭКРАН */}
      <section className="relative w-full min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg5.jpg"
            alt="Фон"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-20">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              Поставки <br />
              <span className="text-[#e66c24]">промышленного</span> <br />
              оборудования
            </h1>
            <p className="text-2xl md:text-3xl mb-10 font-light text-gray-200">
              для пескоструйной обработки и покраски
            </p>

            <div className="mb-12 p-6 bg-white/5 backdrop-blur-md border-l-4 border-[#e66c24] rounded-r-xl inline-block">
              <h2 className="text-3xl font-bold mb-2">Supplier Atyrau</h2>
              <p className="text-gray-300 text-lg">
                Официальный поставщик оборудования для нефтегазовой отрасли в
                Казахстане
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={handleCopyEmail}
                className="bg-[#e66c24] hover:bg-white hover:text-[#e66c24] transition-all duration-300 text-white py-5 px-10 rounded-xl flex items-center justify-center gap-4 font-bold text-lg shadow-2xl min-w-[300px]"
              >
                <Image
                  src="/images/icon-email.svg"
                  alt="Email"
                  width={28}
                  height={28}
                  className="brightness-0 invert group-hover:invert-0"
                />
                {emailCopied ? "Email скопирован!" : "Написать на почту"}
              </button>

              <a
                href="https://wa.me/77019072989"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a8b32] hover:bg-white hover:text-[#2a8b32] transition-all duration-300 text-white py-5 px-10 rounded-xl flex items-center justify-center gap-4 font-bold text-lg shadow-2xl"
              >
                <Image
                  src="/images/icon-whatsapp.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. БЛОК "О КОМПАНИИ" */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-20 py-10 lg:py-24 flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
        <div className="flex-1">
          <h3 className="text-[#e66c24] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Надежный партнер
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f2937] mb-6 lg:mb-10 leading-tight">
            TOO Supplier Atyrau
          </h2>

          <ul className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
            {[
              "Поставка промышленного оборудования",
              "Поставка абразивных материалов",
              "Оборудование для покраски и пескоструйной обработки",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-lg lg:text-xl text-gray-700 font-medium"
              >
                <span className="flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 bg-[#e66c24] rounded-full"></span>
                {text}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/about"
              className="w-full sm:w-auto bg-gray-900 hover:bg-[#e66c24] transition-all duration-300 text-white py-4 lg:py-5 px-10 lg:px-12 rounded-2xl font-bold text-lg shadow-xl text-center"
            >
              Узнать больше
            </Link>

            {/* Иконки преимуществ (на мобилках сделаем их чуть компактнее) */}
            <div className="flex gap-3 p-1 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 lg:p-4 rounded-xl shadow-sm flex flex-col items-center min-w-[80px] lg:min-w-[100px]">
                <Image
                  src="/images/icon-reliable.svg"
                  alt="Надежно"
                  width={24}
                  height={24}
                  className="mb-1 lg:mb-2"
                />
                <span className="text-[9px] font-black text-gray-400 uppercase">
                  Надежно
                </span>
              </div>
              <div className="bg-white p-3 lg:p-4 rounded-xl shadow-sm flex flex-col items-center min-w-[80px] lg:min-w-[100px]">
                <Image
                  src="/images/icon-quality.svg"
                  alt="Качественно"
                  width={24}
                  height={24}
                  className="mb-1 lg:mb-2"
                />
                <span className="text-[9px] font-black text-gray-400 uppercase">
                  Качество
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ЛОГОТИП — убираем лишнее место на мобилках */}
        <div className="flex-1 w-full flex justify-center items-center mt-4 lg:mt-0">
          <div className="relative group w-full max-w-[280px] lg:max-w-[500px]">
            <div className="relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/about-bg.png"
                alt="Логотип Supplier Atyrau"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ОСТАЛЬНЫЕ СЕКЦИИ БЕЗ ИЗМЕНЕНИЙ (ПРОДУКЦИЯ, КОНТАКТЫ И Т.Д.) */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h3 className="text-center text-[#e66c24] text-sm font-black uppercase tracking-[.4em] mb-6">
            Каталог
          </h3>
          <h2 className="text-center text-4xl md:text-5xl font-black text-gray-900 mb-16 uppercase">
            Наша продукция
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((item, idx) => (
              <div
                key={idx}
                className="relative h-[500px] group bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-white hover:border-[#e66c24] transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={`/images/${item.img}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <h4 className="text-black text-3xl font-black leading-tight mb-8 whitespace-pre-line group-hover:translate-y-[-10px] transition-transform duration-500">
                    {item.title}
                  </h4>
                  <div className="relative">
                    {item.type === "link" ? (
                      <a
                        href={item.href}
                        target={
                          item.href?.endsWith(".pdf") ? "_blank" : "_self"
                        }
                        className="bg-gray-900 group-hover:bg-[#e66c24] transition-colors text-white py-4 px-6 rounded-2xl block font-bold shadow-lg text-center uppercase tracking-widest text-sm"
                      >
                        Каталог
                      </a>
                    ) : (
                      <div className="w-full">
                        {openDropdown === idx && (
                          <div className="absolute bottom-full left-0 mb-4 w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-gray-100 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            {item.options?.map((opt, oIdx) => (
                              <a
                                key={oIdx}
                                href={opt.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-5 text-sm text-gray-800 hover:bg-[#e66c24] hover:text-white font-black border-b border-gray-50 last:border-0 transition-all block"
                              >
                                {opt.name} (PDF)
                              </a>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === idx ? null : idx)
                          }
                          className={`${openDropdown === idx ? "bg-[#e66c24]" : "bg-gray-900"} hover:bg-[#e66c24] transition-all text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg w-full uppercase tracking-widest text-sm`}
                        >
                          Каталог
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${openDropdown === idx ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={4}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ЛОГОТИПЫ, 5. ПРОЕКТЫ, 6. КОНТАКТЫ (оставлены как в твоем исходнике) */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-wrap items-center justify-around gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <Image
              src="/images/logo-clemco.png"
              alt="Clemco"
              width={160}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/logo-wiwa.png"
              alt="Wiwa"
              width={160}
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/logo-contracor.png"
              alt="Contracor"
              width={160}
              height={60}
              className="object-contain"
            />
            <div className="h-10 w-[1px] bg-gray-200 hidden md:block"></div>
            <p className="text-sm font-bold text-gray-400 max-w-[200px] text-center md:text-left">
              Официальные прямые поставки
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-20 py-8">
        <div className="w-full relative min-h-[400px] flex flex-col justify-center p-16 overflow-hidden rounded-[3rem] shadow-2xl">
          <Image
            src="/images/projects-bg.jpg"
            alt="Наши проекты"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Наши проекты
            </h3>
            <p className="text-gray-700 text-2xl max-w-xl leading-relaxed">
              Наше оборудование успешно работает на крупнейших
              <span className="text-[#e66c24] font-black">
                {" "}
                промышленных объектах{" "}
              </span>
              Республики Казахстан.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h3 className="text-4xl font-black text-gray-900 mb-12 uppercase">
            Контакты
          </h3>
          <div className="space-y-10">
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center shadow-sm group-hover:bg-[#e66c24] group-hover:rotate-6 transition-all duration-300">
                <Image
                  src="/images/icon-phone.svg"
                  alt="Телефон"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-2xl text-gray-800 font-black group-hover:text-[#e66c24] transition-colors">
                +7 (701) 907-29-89
              </p>
            </div>
            <div
              className="flex items-center gap-8 cursor-pointer group"
              onClick={handleCopyEmail}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center shadow-sm group-hover:bg-[#e66c24] group-hover:rotate-6 transition-all duration-300">
                <Image
                  src="/images/icon-email.svg"
                  alt="Email"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-2xl text-gray-800 font-black group-hover:text-[#e66c24] transition-colors select-all">
                {emailCopied ? "СКОПИРОВАНО!" : "kilimova-oksana@mail.ru"}
              </p>
            </div>
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center shadow-sm">
                <Image
                  src="/images/icon-location.svg"
                  alt="Адрес"
                  width={32}
                  height={32}
                  className="mt-1"
                />
              </div>
              <div>
                <p className="text-2xl text-gray-900 font-black mb-1 group-hover:text-[#e66c24] transition-colors">
                  г. Атырау
                </p>
                <p className="text-xl text-gray-500 font-medium">
                  ул. Атамбаева 12А
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[500px] relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white">
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=51.926208%2C47.090218&mode=whatshere&whatshere%5Bpoint%5D=51.926208%2C47.090218&whatshere%5Bzoom%5D=17&z=17"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>

      <footer className="w-full bg-gray-900 pt-20 pb-10 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
          <div className="text-4xl font-black mb-8 tracking-tighter">
            SUPPLIER <span className="text-[#e66c24]">ATYRAU</span>
          </div>
          <div className="w-24 h-1 bg-[#e66c24] mb-8"></div>
          <p className="text-gray-400 font-medium mb-2 tracking-wide">
            г. Атырау, Республика Казахстан
          </p>
          <p className="text-gray-500 text-sm font-bold opacity-60">
            © 2026 Supplier Atyrau. Все права защищены.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e66c24]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </footer>
    </main>
  );
}
