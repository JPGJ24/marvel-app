README - Pasos para ejecutar el proyecto
Este es el README del proyecto, que contiene los pasos necesarios para ejecutar el proyecto correctamente.

Descargar o clonar el repositorio

## Instalar las dependencias

```bash
npm install

```

## Crear el archivo .env.local

En la raíz del proyecto, crea un nuevo archivo llamado .env.local.

Abre el archivo .env.local y agrega las variables de entorno necesarias para tu proyecto. Por ejemplo:

```bash
API_KEY=TuClaveDeAPI
BASE_URL=https://api.ejemplo.com
```

## Ejecutar el proyecto

Una vez que hayas agregado las variables de entorno, puedes ejecutar el proyecto con el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo y podrás acceder a ella desde tu navegador en la dirección http://localhost:3000.
