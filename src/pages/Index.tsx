import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'benefits', 'services', 'testimonials', 'pricing', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в течение дня.',
    });
    setFormData({ name: '', phone: '', comment: '' });
  };

  const navItems = [
    { label: 'О мне', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'Цены', id: 'pricing' },
    { label: 'Контакты', id: 'contact' },
  ];

  const benefits = [
    {
      icon: 'User',
      title: 'Индивидуальный подход',
      description: 'Каждая консультация адаптирована под ваши личные потребности и цели'
    },
    {
      icon: 'Lock',
      title: 'Конфиденциальность',
      description: 'Полная анонимность и защита ваших персональных данных'
    },
    {
      icon: 'MessageCircle',
      title: 'Поддержка между сессиями',
      description: 'Возможность связаться со мной в сложных ситуациях'
    },
    {
      icon: 'GraduationCap',
      title: 'Профессиональное образование',
      description: 'Кандидат психологических наук, сертифицированный специалист'
    },
    {
      icon: 'Heart',
      title: 'Эмпатия и понимание',
      description: 'Создаю безопасное пространство для открытого диалога'
    },
    {
      icon: 'Target',
      title: 'Ориентация на результат',
      description: 'Работаем над конкретными запросами и достижимыми целями'
    }
  ];

  const services = [
    {
      title: 'Индивидуальная терапия',
      description: 'Работа с личными вопросами, тревожностью, депрессией, самооценкой',
      icon: 'User',
      formats: 'Онлайн / Офлайн'
    },
    {
      title: 'Семейная терапия',
      description: 'Помощь в решении семейных конфликтов и улучшении взаимопонимания',
      icon: 'Users',
      formats: 'Онлайн / Офлайн'
    },
    {
      title: 'Парная терапия',
      description: 'Работа с отношениями, кризисами и коммуникацией в паре',
      icon: 'Heart',
      formats: 'Онлайн / Офлайн'
    },
    {
      title: 'Детская и подростковая',
      description: 'Помощь детям и подросткам в адаптации и развитии',
      icon: 'Baby',
      formats: 'Онлайн / Офлайн'
    }
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Ольга помогла мне справиться с тревожностью и научила техникам релаксации. Теперь я чувствую себя намного увереннее.',
      rating: 5
    },
    {
      name: 'Дмитрий М.',
      text: 'Профессиональный подход и искренняя поддержка. За три месяца работы удалось разобраться с застарелыми проблемами.',
      rating: 5
    },
    {
      name: 'Елена В.',
      text: 'Семейная терапия спасла наш брак. Ольга научила нас слышать друг друга и находить компромиссы.',
      rating: 5
    }
  ];

  const pricing = [
    {
      title: 'Разовая сессия',
      price: '5 000 ₽',
      duration: '60 минут',
      description: 'Подходит для знакомства с терапией или разовых консультаций',
      features: ['Индивидуальный подход', 'Онлайн или офлайн', 'Запись протокола']
    },
    {
      title: 'Пакет 5 сеансов',
      price: '22 500 ₽',
      duration: '5 x 60 минут',
      description: 'Оптимальный вариант для проработки конкретных запросов',
      features: ['Экономия 10%', 'Поддержка между сессиями', 'Гибкий график', 'Домашние задания'],
      popular: true
    },
    {
      title: 'Пакет 10 сеансов',
      price: '40 000 ₽',
      duration: '10 x 60 минут',
      description: 'Для глубокой терапевтической работы и устойчивых изменений',
      features: ['Экономия 20%', 'Приоритетная запись', 'Круглосуточная поддержка', 'Бонусные материалы']
    }
  ];

  const faqItems = [
    {
      question: 'Как проходит онлайн-консультация?',
      answer: 'Онлайн-консультации проходят через видеосвязь (Zoom, Skype). Вам нужно найти тихое место, где никто не помешает, и стабильное интернет-соединение. Эффективность онлайн-терапии не уступает очным встречам.'
    },
    {
      question: 'Сколько сеансов потребуется?',
      answer: 'Количество сеансов индивидуально. Некоторые вопросы можно проработать за 5-10 встреч, более глубокие запросы требуют длительной работы. После первой встречи мы составим план и обсудим примерные сроки.'
    },
    {
      question: 'Гарантируете ли вы конфиденциальность?',
      answer: 'Абсолютно. Вся информация, озвученная на сеансах, защищена профессиональной тайной психолога. Я не передаю никакие данные третьим лицам.'
    },
    {
      question: 'Можно ли отменить или перенести сеанс?',
      answer: 'Да, но прошу предупреждать не менее чем за 24 часа. При более позднем предупреждении сеанс считается проведённым.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={28} />
            <span className="text-xl font-semibold text-foreground">Ольга Пименова</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="text-primary hover:scale-110 transition-transform" size={24} />
            </a>
            <a href="https://t.me/psychologist" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="text-primary hover:scale-110 transition-transform" size={24} />
            </a>
            <Button onClick={() => scrollToSection('contact')} className="ml-2">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(245, 241, 232, 0.8), rgba(245, 241, 232, 0.95)), url('https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/982a9fa7-0b01-4ae1-b717-cc09b999e111.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Психолог, который помогает найти внутреннее спокойствие
              </h1>
              <p className="text-xl text-muted-foreground">
                10 лет опыта. Индивидуальные и семейные консультации онлайн и в Одинцове
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Записаться на консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/79999999999', '_blank')}
                  className="text-lg px-8"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/c26b62ed-9580-4c06-8bc3-8c94005f073c.jpg"
                alt="Ольга Пименова"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Обо мне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я — Ольга Пименова, психолог с 10-летним опытом работы. Моя специализация — индивидуальная, 
                семейная и парная терапия. Я помогаю людям находить гармонию с собой и окружающими, 
                преодолевать жизненные кризисы и достигать личных целей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В своей работе использую когнитивно-поведенческий подход, гештальт-терапию и методы 
                позитивной психологии. Каждая встреча — это безопасное пространство для вашего роста.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">лет практики</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">КПН</div>
                  <div className="text-sm text-muted-foreground">кандидат наук</div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/c45d52c0-c6f3-426c-91f8-bbe7d86c02cc.jpg"
                alt="Рабочее место"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Почему ко мне обращаются</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессионализм, эмпатия и индивидуальный подход в каждой консультации
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Услуги и направления</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексная психологическая помощь для взрослых, пар и семей
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="text-primary" size={32} />
                    </div>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {service.formats}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Истории изменений и благодарности людей, прошедших терапию
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Стоимость консультаций</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите удобный формат работы
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular ? 'border-primary scale-105' : 'border-transparent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.duration}</div>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Атмосфера работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Безопасное и уютное пространство для перемен
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/982a9fa7-0b01-4ae1-b717-cc09b999e111.jpg',
              'https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/c45d52c0-c6f3-426c-91f8-bbe7d86c02cc.jpg',
              'https://cdn.poehali.dev/projects/73594ccc-5730-458f-ab72-e3c4e7c09ad9/files/c26b62ed-9580-4c06-8bc3-8c94005f073c.jpg'
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Часто спрашивают</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ответы на популярные вопросы о психотерапии
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Записаться на консультацию</h2>
              <p className="text-muted-foreground">
                Оставьте заявку — я свяжусь с вами в течение дня
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Как к вам обращаться?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Комментарий</label>
                      <Textarea
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        placeholder="Расскажите кратко о вашем запросе (необязательно)"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Контакты</h3>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium text-foreground">Телефон</div>
                      <a href="tel:+79999999999" className="text-muted-foreground hover:text-primary">
                        +7 (999) 999-99-99
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a href="mailto:olga@psychologist.ru" className="text-muted-foreground hover:text-primary">
                        olga@psychologist.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium text-foreground">Адрес</div>
                      <div className="text-muted-foreground">г. Одинцово, ул. Маршала Жукова, 15</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium text-foreground">График работы</div>
                      <div className="text-muted-foreground">Пн-Сб: 10:00 - 20:00</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold text-foreground mb-3">Я в соцсетях</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/79999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </a>
                    <a
                      href="https://t.me/psychologist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Send" className="text-primary" size={24} />
                    </a>
                    <a
                      href="https://instagram.com/psychologist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="Instagram" className="text-primary" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <span className="font-semibold text-lg">Ольга Пименова</span>
              </div>
              <p className="text-background/70 text-sm">
                Психолог с 10-летним опытом. Помогаю находить внутреннее спокойствие.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-primary transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (999) 999-99-99</li>
                <li>olga@psychologist.ru</li>
                <li>г. Одинцово</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Лицензия № 12345</li>
                <li>ИНН 1234567890</li>
                <li>ОГРНИП 1234567890123</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2025 Пименова Ольга. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          onClick={() => window.open('https://wa.me/79999999999', '_blank')}
          className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
