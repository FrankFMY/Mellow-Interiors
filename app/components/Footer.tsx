import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Проекты", href: "#portfolio" },
  { label: "Процесс", href: "#process" },
  { label: "О студии", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-serif mb-4">
              Mellow <span className="text-gold">Interiors</span>
            </h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Студия дизайна интерьеров. Создаём пространства, в которых
              хочется жить, с 2017 года.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  Москва, Большая Ордынка, 21
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:hello@mellow.ru"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  hello@mellow.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">
              Время работы
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Пн–Пт: 10:00–19:00
              <br />
              Встречи по предварительной записи
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; 2025 Mellow Interiors. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
