Ecommerce Store
Этот проект представляет собой интернет-магазин, созданный с использованием современных технологий, таких как React, Redux, Material-UI и Firebase. Проект был создан с помощью Create React App.

Установка
Для начала работы с проектом выполните следующие шаги:

Клонируйте репозиторий:
git clone https://github.com/Slavik6661/online_shop.git
cd online_shop

Установите зависимости:
npm install

Запуск проекта
Запуск в режиме разработки
Для запуска проекта в режиме разработки выполните команду:
npm run start
Приложение будет доступно по адресу: http://localhost:3000.

Запуск JSON-сервера
Для запуска локального JSON-сервера (имитация бэкенда) выполните команду:
npm run json-server
Сервер будет доступен по адресу: http://localhost:3001.

Сборка проекта
Для сборки проекта выполните команду:
npm run build
Собранные файлы будут размещены в папке build.

Скрипты
npm start: Запуск приложения в режиме разработки.
npm run build: Сборка проекта для production.
npm test: Запуск тестов.
npm run eject: Извлечение конфигурации Create React App (необратимо).
npm run json-server: Запуск JSON-сервера для имитации бэкенда.

Зависимости
Основные зависимости проекта:
React: Библиотека для создания пользовательских интерфейсов.
Redux: Управление состоянием приложения.
Material-UI: Библиотека компонентов для React.
Firebase: База данных и аутентификация.
Axios: HTTP-клиент для работы с API.
React Router DOM: Маршрутизация в приложении.
Styled Components: Стилизация компонентов.
Полный список зависимостей можно найти в файле package.json.

Структура проекта
ecommerce-store/
├── public/                  # Статические файлы
├── src/                     # Исходный код приложения
│   ├── assets/              # Ресурсы приложения (изображения, шрифты, стили)
│   ├── components/          # Компоненты React
│   ├── hooksComponents/     # Кастомные React-хуки
│   ├── interfaces/          # Интерфейсы TypeScript
│   ├── jsonData/            # Данные для JSON-сервера
│   ├── pages/               # Страницы приложения
│   ├── redux/               # Redux-логика (слайсы, хранилище)
│   ├── translate/           # Переводы и локализация
│   ├── App.tsx              # Главный компонент приложения
│   ├── index.tsx            # Точка входа в приложение
│   └── ...                  # Другие файлы
├── package.json             # Зависимости и скрипты
├── tsconfig.json            # Конфигурация TypeScript
└── README.md                # Документация

Используемые технологии
Frontend:
React
Redux (с Redux Toolkit)
React Router DOM
Material-UI (MUI)
Styled Components
Axios
Backend:
Firebase (база данных и аутентификация)
JSON Server (для локальной разработки)

Инструменты:
TypeScript
Create React App
ESLint
Prettier
