# angular-users-component

Angular 6 + Custom WebPack

Инструкция по сборке
--------------------

1. Установить NPM и Git.

2. Клонировать репозиторий

    ~~~
    git clone https://github.com/andchir/angular-users-component.git
    ~~~

3. Установить зависимости

    ~~~
    npm install
    ~~~

4. Собрать пакеты

    ~~~
    npm run build:prod
    ~~~
    
5. По желанию в файле ``/config/config.common.json`` можно отредактировать название и описание проекта, а так же базовый URL.

6. Открыть в браузере ``/public/index.html`` (точный адрес зависит от настроек веб-сервера).

В режиме разработки использовать:

~~~
npm run build:dev
~~~

~~~
npm run server
~~~
