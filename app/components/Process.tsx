"use client";

import { motion } from "framer-motion";
import { MessageCircle, Ruler, Lightbulb, MonitorPlay, Hammer } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Знакомство",
    description: "Обсуждаем ваши пожелания, образ жизни, бюджет и сроки",
  },
  {
    icon: Ruler,
    title: "Замеры",
    description: "Выезд на объект, обмерный план, фиксация всех нюансов",
  },
  {
    icon: Lightbulb,
    title: "Концепция",
    description: "Мудборд, планировочное решение, подбор материалов и палитры",
  },
  {
    icon: MonitorPlay,
    title: "Визуализация",
    description: "Фотореалистичные 3D-рендеры каждого помещения",
  },
  {
    icon: Hammer,
    title: "Реализация",
    description: "Авторский надзор, комплектация, контроль на всех этапах",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">
            Как мы работаем
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal mt-3">
            Процесс
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center lg:text-center"
              >
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 relative z-10 bg-beige">
                  <step.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-xs text-gold font-medium tracking-wider uppercase mb-2">
                  Шаг {i + 1}
                </div>
                <h3 className="text-lg font-serif text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
