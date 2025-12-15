# HTML и CSS коды блоков сайта GetCourse Pro

Все блоки сайта экспортированы в отдельные HTML и CSS файлы для удобного использования.

## Список файлов

### 1. Hero Block (Главный экран)
- `hero.html` - HTML разметка главного экрана
- `hero.css` - Стили для главного экрана

**Что включает:**
- Заголовок и описание
- Две CTA кнопки
- Адаптивная верстка
- Плавная анимация появления

---

### 2. Services Block (Блок услуг)
- `services.html` - HTML разметка блока услуг
- `services.css` - Стили для блока услуг

**Что включает:**
- 6 карточек услуг с иконками
- Grid layout (1/2/3 колонки)
- Hover эффекты
- Анимация появления с задержкой

---

### 3. Pricing Block (Прайс-лист)
- `pricing.html` - HTML разметка прайс-листа
- `pricing.css` - Стили для прайс-листа

**Что включает:**
- 3 тарифных плана
- Выделение популярного плана
- Список особенностей с галочками
- Кнопки заказа

---

### 4. Contact Form (Форма обратной связи)
- `contact-form.html` - HTML разметка формы контактов
- `contact-form.css` - Стили для формы

**Что включает:**
- Рабочая форма отправки заявок
- Контактная информация
- JavaScript для отправки данных
- Интеграция с backend API

---

## Как использовать

### Вариант 1: Отдельные блоки
Каждый блок можно использовать независимо:
1. Откройте нужный `.html` файл
2. Убедитесь, что рядом находится соответствующий `.css` файл
3. Откройте в браузере

### Вариант 2: Интеграция в существующий сайт
1. Скопируйте нужный HTML код из `.html` файла
2. Скопируйте стили из `.css` файла в ваш основной CSS
3. Убедитесь, что подключены Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Вариант 3: Объединить все блоки
Создайте один HTML файл и объедините все блоки:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GetCourse Pro</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Скопируйте содержимое каждого блока сюда -->
</body>
</html>
```

## Цветовая палитра

```css
/* Основные цвета */
--primary: #8B5CF6;           /* Фиолетовый акцент */
--primary-hover: #7c3aed;     /* Темнее при наведении */
--secondary: #1a1f2c;         /* Темно-синий для текста */
--text-muted: #6b7280;        /* Серый для описаний */
--border: #e5e7eb;            /* Серый для границ */
--background: #ffffff;        /* Белый фон */
--background-muted: #f9fafb;  /* Светло-серый фон секций */
```

## Шрифты

- **Montserrat** - заголовки (h1-h6)
- **Open Sans** - основной текст и UI элементы

## Адаптивность

Все блоки полностью адаптивны и протестированы на:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (до 767px)

## Анимации

Используются CSS анимации:
- `fadeIn` - плавное появление
- `fadeInUp` - появление снизу вверх
- Hover эффекты для карточек и кнопок
- Smooth transitions

## Backend интеграция

Форма обратной связи (`contact-form.html`) подключена к рабочему backend:
- API URL: `https://functions.poehali.dev/a6580b0b-d55a-47c2-a8a0-1321c8beaa5c`
- Метод: POST
- Формат: JSON

**Необходимые поля:**
- name (обязательно)
- email (обязательно)
- phone (обязательно)
- service (опционально)
- message (обязательно)

## Поддержка браузеров

✅ Chrome/Edge (последние 2 версии)
✅ Firefox (последние 2 версии)
✅ Safari (последние 2 версии)
✅ Мобильные браузеры

---

## Поддержка

Если возникнут вопросы по использованию:
- Email: info@getcourse-pro.ru
- Telegram: @getcourse_pro
- Телефон: +7 (900) 123-45-67
