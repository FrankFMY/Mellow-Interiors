"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

const roomTypes = [
  "Квартира",
  "Загородный дом",
  "Таунхаус",
  "Коммерческое помещение",
  "Офис",
];

const budgets = [
  "до 1 млн ₽",
  "1–3 млн ₽",
  "3–5 млн ₽",
  "5–10 млн ₽",
  "от 10 млн ₽",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-beige">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal mt-3">
            Обсудим проект?
          </h2>
          <p className="text-gray mt-4">
            Оставьте заявку — мы свяжемся с вами в течение дня
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 text-center"
          >
            <CheckCircle className="w-14 h-14 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              Заявка отправлена
            </h3>
            <p className="text-gray">
              Мы перезвоним вам в ближайшее время для обсуждения деталей
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Анна Иванова"
                  className="w-full px-4 py-3 border border-border focus:border-gold outline-none transition-colors text-charcoal placeholder:text-gray-light bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 border border-border focus:border-gold outline-none transition-colors text-charcoal placeholder:text-gray-light bg-transparent"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Тип помещения
                </label>
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 pr-10 border border-border focus:border-gold outline-none transition-colors text-charcoal appearance-none bg-transparent"
                  >
                    <option value="" disabled>
                      Выберите тип
                    </option>
                    {roomTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-light absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Площадь (м²)
                </label>
                <input
                  type="number"
                  placeholder="120"
                  className="w-full px-4 py-3 border border-border focus:border-gold outline-none transition-colors text-charcoal placeholder:text-gray-light bg-transparent"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Бюджет
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 pr-10 border border-border focus:border-gold outline-none transition-colors text-charcoal appearance-none bg-transparent"
                >
                  <option value="" disabled>
                    Выберите бюджет
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-light absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gold hover:bg-gold-dark text-white font-medium tracking-wide uppercase transition-colors"
            >
              Оставить заявку
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
