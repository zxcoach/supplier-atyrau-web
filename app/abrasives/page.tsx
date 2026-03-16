"use client";

import Link from "next/link";

export default function AbrasivesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      {/* Шапка */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter text-[#1f2937]">
            SUPAT <span className="text-[#e66c24]"></span>
          </div>
          <Link
            href="/"
            className="group text-sm font-bold text-gray-500 hover:text-[#e66c24] transition-all flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            На главную
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-[#1f2937] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#e66c24] skew-x-12 translate-x-20 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <span className="inline-block bg-[#e66c24] text-white font-black tracking-widest uppercase text-[10px] px-3 py-1 mb-6 rounded-sm">
            Технические условия: 08.12.13.-004-74714301-2021
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase">
            Песок шлаковый <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #e66c24" }}
            >
              Абразивный порошок
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Высокоэффективный купершлак для пескоструйной очистки до степеней
            <span className="text-white font-bold ml-2">
              Sa 2, Sa 2½, Sa 3
            </span>{" "}
            по ISO 8501.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-20 -mt-12 space-y-12 relative z-10">
        {/* Основные характеристики */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-[#e66c24] px-10 py-6 text-white flex justify-between items-center">
            <h2 className="font-black uppercase tracking-tight text-xl">
              Физико-механические параметры
            </h2>
            <span className="hidden md:block text-xs font-bold opacity-80 uppercase tracking-widest">
              Standard Quality
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody className="text-base md:text-lg">
                {[
                  {
                    label: "Фракционный состав",
                    val: "0,2-1,6; 0,2-1,8; 0,5-2,5; 0,5-3,0; 1,0-4,0 мм",
                    sub: "Возможно изменение под заказ",
                  },
                  {
                    label: "Твердость по Моосу",
                    val: "6 Moos",
                    highlight: true,
                  },
                  {
                    label: "Влажность",
                    val: "Не более 1%",
                    color: "text-green-600",
                  },
                  { label: "Насыпная плотность", val: "Не менее 1400 кг/м³" },
                  {
                    label: "Абразивная способность",
                    val: "Не менее 0,01 г/см²",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-8 text-gray-500 font-medium uppercase text-xs tracking-wider w-1/3">
                      {row.label}
                    </td>
                    <td
                      className={`p-8 font-bold ${row.color || "text-gray-900"}`}
                    >
                      {row.val}
                      {row.sub && (
                        <span className="block text-[10px] text-orange-500 font-black mt-1 uppercase italic">
                          {row.sub}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Химия и Упаковка */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-800 px-10 py-6 text-white">
              <h3 className="font-black uppercase tracking-tight text-lg">
                Химический состав (%)
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { n: "Двуокись кремния (SiO₂)", v: "42-55" },
                  { n: "Железо (Fe₃O₄+Fe₂O₃)", v: "16-25" },
                  { n: "Окись кальция (CaO)", v: "10-18" },
                  { n: "Окись магния (MgO)", v: "8-10" },
                  { n: "Окись алюминия (Al₂O₃)", v: "3-4" },
                  { n: "Сера (S)", v: "до 0,4" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-4 rounded-2xl flex flex-col justify-center"
                  >
                    <span className="text-[10px] text-gray-400 font-black uppercase mb-1">
                      {item.n}
                    </span>
                    <span className="text-xl font-black text-gray-800">
                      {item.v}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-[2rem] shadow-xl p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl italic uppercase">
              Mkr
            </div>
            <h3 className="text-2xl font-black mb-8 text-[#e66c24] uppercase">
              Тара и логистика
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  📦
                </div>
                <div>
                  <p className="font-black uppercase text-sm tracking-widest mb-1">
                    Мягкий контейнер (МКР)
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Биг-Бэг грузоподъемностью{" "}
                    <strong className="text-white text-lg">1,0 тн</strong>.
                    Оснащен ПЭ вкладышем толщиной{" "}
                    <span className="text-white">120 мкн</span> для защиты от
                    влаги.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                  🚛
                </div>
                <div>
                  <p className="font-black uppercase text-sm tracking-widest mb-1">
                    Условия поставки
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Отгрузка осуществляется со складов в Казахстане или напрямую
                    с производства в г. Орск.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Группы фракций */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gray-100 px-10 py-6 border-b border-gray-200">
            <h3 className="font-black uppercase tracking-tight text-lg text-gray-800 text-center md:text-left">
              Классификация групп абразивного порошка
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <th className="p-6 border-b pl-10">Группа</th>
                  <th className="p-6 border-b">Диапазоны фракций (мм)</th>
                  <th className="p-6 border-b">Max зерно</th>
                  <th className="p-6 border-b text-right pr-10">
                    Масса осн. фракции
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base font-medium">
                {[
                  {
                    g: "Мини",
                    f: "0,1-0,5 / 0,1-0,6 / 0,1-0,8 / 0,1-1,0",
                    m: "1.0 - 1.5 мм",
                    p: "80%",
                  },
                  {
                    g: "Мелкая",
                    f: "0,2-1,6 / 0,2-1,8 / 0,2-2,0 / 0,2-2,2",
                    m: "2.0 - 2.5 мм",
                    p: "90%",
                  },
                  {
                    g: "Полуторка",
                    f: "0,3-1,5 / 0,5-1,5 / 0,5-1,8 / 0,5-2,0",
                    m: "2.0 - 2.5 мм",
                    p: "90%",
                  },
                  {
                    g: "Стандарт",
                    f: "0,3-2,5 / 0,5-2,5 / 0,3-3,0 / 0,5-3,0",
                    m: "3.0 мм",
                    p: "90%",
                  },
                  {
                    g: "Крупная",
                    f: "0,8-2,5 / 0,8-2,8 / 0,8-3,0 / 1,0-3,0",
                    m: "3.0 - 3.5 мм",
                    p: "90%",
                  },
                  {
                    g: "Макси",
                    f: "1,2-3,0 / 1,5-3,0 / 1,5-3,2 / 3,0-5,0",
                    m: "3.5 - 5.5 мм",
                    p: "85%",
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-0 hover:bg-orange-50/30 transition-colors"
                  >
                    <td className="p-6 pl-10 font-black text-[#e66c24] uppercase tracking-tighter">
                      {item.g}
                    </td>
                    <td className="p-6 text-gray-600 font-mono text-xs">
                      {item.f}
                    </td>
                    <td className="p-6 text-gray-900 font-bold">{item.m}</td>
                    <td className="p-6 text-right pr-10">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black">
                        {item.p}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-10 text-center text-gray-400 text-[10px] uppercase tracking-widest py-16">
        © 2026 SUPAT – Industrial Supply Company (A brand of Supplier Atyrau
        LLP) • Промышленное сырье ГОСТ / ТУ
      </footer>
    </main>
  );
}
