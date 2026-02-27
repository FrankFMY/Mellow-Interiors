"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const projects = [
  {
    title: "Квартира на Патриарших",
    area: "120 м²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=750&fit=crop&q=80",
    description: "Минималистичный интерьер с акцентами из натурального дерева и камня. Панорамное остекление и открытая планировка создают ощущение простора.",
    tall: true,
  },
  {
    title: "Загородный дом в Барвихе",
    area: "350 м²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=80",
    description: "Классический интерьер с современными элементами. Двойная высота гостиной, камин из мрамора, авторская мебель.",
    tall: false,
  },
  {
    title: "Лофт на Красном Октябре",
    area: "95 м²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=750&fit=crop&q=80",
    description: "Индустриальная эстетика: открытый кирпич, металлические конструкции, бетонные поверхности. Зонирование светом и текстурами.",
    tall: true,
  },
  {
    title: "Пентхаус в Москва-Сити",
    area: "200 м²",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop&q=80",
    description: "Luxury-интерьер на 58-м этаже. Мрамор, латунь, панорамный вид на город. Индивидуальная мебель и авторский свет.",
    tall: false,
  },
  {
    title: "Студия на Остоженке",
    area: "45 м²",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&q=80",
    description: "Компактное пространство с продуманной эргономикой. Скрытые системы хранения, трансформируемая мебель, тёплая палитра.",
    tall: false,
  },
  {
    title: "Таунхаус в Хамовниках",
    area: "180 м²",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=750&fit=crop&q=80",
    description: "Трёхуровневый таунхаус в скандинавском стиле. Светлые тона, натуральные материалы, внутренний дворик с ландшафтным дизайном.",
    tall: true,
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-charcoal hover:text-gold transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h3 className="text-2xl font-serif text-charcoal">
              {project.title}
            </h3>
            <span className="text-sm text-gold font-medium shrink-0">
              {project.area}
            </span>
          </div>
          <p className="text-gray leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">
            Портфолио
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal mt-3">
            Наши проекты
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => setSelected(i)}
            >
              <div className={`relative ${project.tall ? "h-80 sm:h-96" : "h-56 sm:h-64"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Maximize2 className="w-6 h-6 text-white mb-3" />
                  <h3 className="text-lg font-serif text-white text-center px-4">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/70 mt-1">
                    {project.area}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <ProjectModal
            project={projects[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
