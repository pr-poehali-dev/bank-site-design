import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Landmark" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">Правильный банк</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О банке</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Личный кабинет</Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Банк, который <span className="text-primary">заботится</span> о вас
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Простые решения для безопасных финансов. Мы создаём спокойствие и гармонию в вашем финансовом мире.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              О БАНКЕ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Акционерное общество «Правильный банк»
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Наименование кредитной организации: <span className="font-semibold text-foreground">Акционерное общество «Правильный банк» (АО «Правильный банк»)</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Дизайн сайта Правильного банка выдержан в зелёных и белых тонах, символизирующих спокойствие, гармонию и надёжность. Простой и понятный интерфейс позволяет легко ориентироваться и находить нужную информацию. Каждая страница построена на основе чётких блоков, отображающих наши преимущества и доступные продукты.
            </p>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ПРЕИМУЩЕСТВА
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали банк, который действительно работает для людей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Безопасность</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Надёжная защита ваших средств и персональных данных по современным стандартам безопасности
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Простота</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Понятный интерфейс и быстрое обслуживание. Все операции занимают минимум времени
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Надёжность</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Стабильная работа и поддержка клиентов 24/7. Мы всегда рядом, когда вы нужны
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ПРОДУКТЫ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Банковские продукты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте удобные решения для ваших финансовых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
                <Icon name="CreditCard" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">Дебетовая карта</h3>
                <p className="text-white/90 mb-6">Удобная карта для повседневных покупок</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>Кешбэк до 5%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>Бесплатное обслуживание</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>Снятие без комиссии</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <Button className="w-full" size="lg">Оформить карту</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-foreground to-foreground/80 p-8 text-white">
                <Icon name="Wallet" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">Кредитная карта</h3>
                <p className="text-white/90 mb-6">Покупки в кредит без переплат</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>Грейс-период 120 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>Лимит до 500 000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} />
                    <span>0% на покупки</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <Button className="w-full" size="lg" variant="outline">Оформить карту</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              КОНТАКТЫ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Свяжитесь с нами
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">8 800 555-35-35</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@pravilnybank.ru</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Банковская, 1</p>
              </div>
            </div>
            <Button size="lg" className="text-lg">
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Landmark" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">Правильный банк</span>
            </div>
            <p className="text-white/70 text-center">
              © 2024 АО «Правильный банк». Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
