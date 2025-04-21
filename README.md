# Gestión y Filtrado de Ventas con Supabase + React

Aplicación sencilla desarrollada con React y Supabase que permite visualizar una tabla de usuarios con sus productos vendidos, fechas de venta y cuotas asociadas. Incluye funcionalidad para filtrar por rango de fechas y calcular el total de cuotas por usuario.

## Descripción del Proyecto

Este proyecto tiene como objetivo implementar funcionalidades básicas de lectura, filtrado y cálculo de totales desde una interfaz amigable.
  

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso del Proyecto](#uso-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Características](#características)
- [Créditos](#créditos)

## Instalación

Sigue los pasos a continuación para ejecutar el proyecto localmente:

1. Clona el repositorio:
   git clone https://github.com/Anahi606/DeployAQ
   O descargalo manualmente como zip y descomprimelo.
2. Navega a la carpeta del proyecto:
   cd DeployAQ
4. Instala las dependencias:
   npm
5. Solicita las variables de entorno a la autora del proyecto, es decir el archivo .env que deberas poner en la carpeta root del proyecto
   
   ![image](https://github.com/user-attachments/assets/4cbd5079-1189-4d44-b73d-1a478b9a0c23)
7. Inicia la aplicación:
   npm start
   

## Uso del Proyecto
Una vez iniciado el proyecto:

- Selecciona una fecha de inicio y una fecha de fin desde los campos de fecha.
- Haz clic en el botón "Filter".
- Se mostrará una tabla con los usuarios que tienen ventas dentro del rango seleccionado.
- También se mostrará una tabla resumen con el total de cuotas agrupadas por nombre.


## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

![image](https://github.com/user-attachments/assets/b081965a-5e0e-4f47-8968-2225dca93f76)


## Características
- Consulta de datos desde Supabase
- Filtro de resultados por rango de fechas
- Cálculo del total de cuotas por usuario
- Interfaz limpia y sencilla
- Desarrollo en React utilizando hooks (`useState`, `useEffect`)

## Créditos

https://github.com/martincor17/MiniCoreMC.git
https://main--eclectic-tulumba-5d3a7d.netlify.app/
https://legacy.reactjs.org/docs/getting-started.html
