"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Home, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "8", label: "лет опыта" },
  { icon: Home, value: "200+", label: "проектов" },
  { icon: Award, value: "15", label: "наград" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=900&fit=crop&q=80"
                alt="Studio team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">
              О студии
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal mt-3 mb-6">
              Mellow Interiors
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              Мы — команда архитекторов и дизайнеров, которая превращает
              пространства в отражение личности их владельцев. Каждый проект
              начинается с диалога и заканчивается интерьером, в котором хочется
              жить.
            </p>
            <p className="text-gray leading-relaxed mb-10">
              Работаем с квартирами, загородными домами и коммерческими
              пространствами. Берём на себя весь цикл — от концепции до
              авторского надзора за реализацией.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <stat.icon className="w-5 h-5 text-gold mb-2 mx-auto sm:mx-0" />
                  <div className="text-3xl sm:text-4xl font-serif text-charcoal">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
