# Sistema de Trazabilidad de Cilindros

## Tecnologías

**Cliente:** 
- Javascript ES6
- React 17.0.1 
- Reacstrap 8.7.1
- Bootstrap 4 
- Fontawesome 5.14.1 
- Axios 0.21.1

**Servidor:** 
- Php >7.4
- Laravel 8
- Mysql 5.7

## Dependencias Necesarias

- npm 7.9.0
- node v12.11.1
- git
- curl
- soap
- composer 2.0.8
- Dependencias Php:
    - pdo_mysql 
    - mbstring 
    - exif 
    - pcntl 
    - bcmath 
    - gd 
    - zip

## Variables de Entorno

Para correr el proyecto previamente se necesita setear las variables de entorno en el *.env* del *backend*.

- Se deben colocar las credenciales para acceder al webservices.
  
  `USER_SOAP` 

  `PASSWORD_SOAP`

- Se debe colocar el nombre de la base de datos con sus credenciales

  `DB_DATABASE`
  
  `DB_USERNAME`
  
  `DB_PASSWORD`

- Se debe ingresar el *uid* y *user* root del so para darle permisos de edición en los archivos del contenedor.

  `UID`

  `USER`

## Instalación Backend

Pasos a seguir una vez clonado el repositorio y seteado las variables de entorno:

  - Crear la base de datos con el nombre seteado en la variable de entorno *(.env)*
  - Ir a la caperta del *`/backend`*
  - Correr el siguiente comando para instalar las dependencias de la *api*
  ```bash
    composer install
  ```
  - Correr el generador de key de artisan para que la aplicación sea segura
  ```bash
    php artisan key:generate
  ```
  - Correr las migrations de las tablas
  ```bash
    php artisan migrate
  ```
  - Correr los seeds de las tablas
  ```bash
    php artisan db:seed
  ```
  - Para levantar el servidor
  ```bash
    php artisan serve
  ```

## Instalación Frontend

Pasos a seguir una vez clonado el repositorio:

  - Ir a la caperta del *`/frontend`*
  - Correr el siguiente comando para instalar las dependencias de la *api*
  ```bash
    npm install
  ```
  - Para levantar el servidor
  ```bash
    npm start
  ```