import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import funcUrls from '../../backend/func2url.json';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(funcUrls['send-email'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить заявку. Попробуйте позже.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Проверьте подключение.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: 'Globe',
      title: 'Привязка домена',
      description: 'Привязываем домен к GetCourse и настраиваем корректную переадресацию',
    },
    {
      icon: 'Shield',
      title: 'SSL-сертификат',
      description: 'Установка SSL-сертификата для безопасности вашего сайта',
    },
    {
      icon: 'Mail',
      title: 'Настройка почты',
      description: 'SPF-записи, DKIM-подписи и прием обращений на технические адреса',
    },
    {
      icon: 'CreditCard',
      title: 'Прием платежей',
      description: 'Настройка Get Модуля для приема платежей от учеников',
    },
    {
      icon: 'Settings',
      title: 'Базовые воронки',
      description: 'Создание рассылок, тренингов и продающих страниц',
    },
    {
      icon: 'CheckCircle',
      title: 'Защита репутации',
      description: 'Подтверждение домена на postmaster.mail.ru и настройка FBL',
    },
  ];

  const portfolio = [
    {
      title: 'Школа английского языка',
      description: 'Полная техническая настройка платформы за 3 дня',
      tags: ['GetCourse', 'Домен', 'Платежи'],
    },
    {
      title: 'Онлайн-курсы по маркетингу',
      description: 'Интеграция с платежными системами и настройка воронок',
      tags: ['Воронки', 'SSL', 'Почта'],
    },
    {
      title: 'Школа психологии',
      description: 'Миграция с другой платформы и настройка под ключ',
      tags: ['Миграция', 'GetCourse', 'Настройка'],
    },
  ];

  const team = [
    {
      name: 'Алексей Петров',
      role: 'Технический директор',
      experience: '8 лет в EdTech',
    },
    {
      name: 'Мария Иванова',
      role: 'Специалист по GetCourse',
      experience: '5 лет опыта',
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'DevOps инженер',
      experience: '6 лет опыта',
    },
  ];

  const pricing = [
    {
      title: 'Базовая настройка',
      price: '15 000 ₽',
      features: [
        'Привязка домена к GetCourse',
        'Установка SSL-сертификата',
        'Настройка переадресации',
        'SPF и DKIM записи',
        'Настройка почты',
      ],
    },
    {
      title: 'Расширенная настройка',
      price: '30 000 ₽',
      features: [
        'Всё из базовой настройки',
        'Настройка Get Модуля',
        'Создание 3 воронок продаж',
        'Настройка FBL Mail.ru',
        'Консультация 2 часа',
      ],
      popular: true,
    },
    {
      title: 'Премиум пакет',
      price: '50 000 ₽',
      features: [
        'Всё из расширенной настройки',
        'Создание лендингов (3 шт)',
        'Настройка автоворонок',
        'Интеграция с CRM',
        'Техподдержка 1 месяц',
      ],
    },
  ];

  const faq = [
    {
      question: 'Сколько времени занимает базовая настройка?',
      answer: 'Базовая настройка GetCourse занимает от 1 до 3 рабочих дней в зависимости от сложности требований.',
    },
    {
      question: 'Нужен ли мне домен для настройки?',
      answer: 'Да, для полноценной работы школы рекомендуется иметь собственный домен. Мы поможем с его регистрацией, если у вас его еще нет.',
    },
    {
      question: 'Что входит в техническую поддержку?',
      answer: 'Техподдержка включает консультации по работе платформы, помощь в настройке дополнительных функций и исправление технических проблем.',
    },
    {
      question: 'Можете ли вы помочь с миграцией с другой платформы?',
      answer: 'Да, мы занимаемся миграцией контента, пользователей и курсов с других образовательных платформ на GetCourse.',
    },
    {
      question: 'Какие платежные системы можно подключить?',
      answer: 'Мы настраиваем интеграцию с популярными платежными системами: ЮKassa, CloudPayments, Robokassa, PayPal и другими.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold text-secondary">GetCourse Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('team')} className="text-sm hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
                Связаться
              </Button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <Icon name="X" size={24} className="text-secondary" />
                ) : (
                  <Icon name="Menu" size={24} className="text-secondary" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Главная</button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Портфолио</button>
                <button onClick={() => scrollToSection('team')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Команда</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Прайс</button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Контакты</button>
                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Связаться
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Технические специалисты GetCourse</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary leading-tight">
              Хотите запустить или<br />настроить свою онлайн школу?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полная техническая настройка GetCourse под ключ. Домен, SSL, почта, платежи — всё за вас.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-base">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Посмотреть услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Основные технические настройки</h2>
            <p className="text-lg text-muted-foreground">Настройки, без которых вы не сможете полноценно работать с платформой</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Проекты, которые мы успешно запустили</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground">Профессионалы с многолетним опытом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{member.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Сертификаты</h2>
            <p className="text-lg text-muted-foreground">Подтверждение нашей квалификации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((cert) => (
              <Card key={cert} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-purple-200 flex items-center justify-center">
                  <Icon name="Award" size={80} className="text-primary" />
                </div>
                <CardContent className="p-4">
                  <p className="text-center font-medium">Сертификат GetCourse Expert</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящий пакет услуг</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${plan.popular ? 'border-primary border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Популярный</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'} onClick={() => scrollToSection('contact')}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Отправить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="service">Интересующая услуга</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Базовая настройка">Базовая настройка</SelectItem>
                      <SelectItem value="Расширенная настройка">Расширенная настройка</SelectItem>
                      <SelectItem value="Премиум пакет">Премиум пакет</SelectItem>
                      <SelectItem value="Консультация">Консультация</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Опишите ваш проект и требования..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@getcourse-pro.ru" className="text-primary hover:underline">info@getcourse-pro.ru</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:+79001234567" className="text-primary hover:underline">+7 (900) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <a href="https://t.me/getcourse_pro" className="text-primary hover:underline">@getcourse_pro</a>
                  </div>
                </div>
                <Button size="lg" className="w-full mt-6" asChild>
                  <a href="https://t.me/getcourse_pro" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} />
                <span className="text-xl font-heading font-bold">GetCourse Pro</span>
              </div>
              <p className="text-white/70">Технические специалисты для вашей онлайн-школы</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Портфолио</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Прайс</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@getcourse-pro.ru</li>
                <li>+7 (900) 123-45-67</li>
                <li>@getcourse_pro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 GetCourse Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;