# Curso de React Native con Expo (Midu)

Este repositorio acompaña el curso **“React Native para Principiantes + Aplicación DESDE CERO con Expo”** impartido por Midu. Contiene los ejercicios y ejemplos mostrados en los **videos 1 y 2** del curso, así como **notas y anotaciones** sobre cambios que han ocurrido desde su publicación (hace más de 10 meses).  
El código base se encuentra en: [Eriold/react-native-learn](https://github.com/Eriold/react-native-learn).

---

## Índice

1. [Descripción del Curso](#descripción-del-curso)  
2. [Prerequisitos y Entorno](#prerequisitos-y-entorno)  
3. [Instalación y Arranque](#instalación-y-arranque)  
4. [Contenido de la Clase 1](#contenido-de-la-clase-1)  
   - 4.1. Introducción y Objetivos  
   - 4.2. Creación de la App con Expo  
   - 4.3. Estructura de Archivos  
   - 4.4. Componentes Básicos y Estilos  
   - 4.5. Notas de Cambios desde entonces (en este repo)  
5. [Contenido de la Clase 2](#contenido-de-la-clase-2)  
   - 5.1. Instalación de React Navigation  
   - 5.2. Stack Navigator y Rutas  
   - 5.3. Fetch de Datos y State Management  
   - 5.4. Diseño de Listas y Detalles  
   - 5.5. Notas de Cambios desde entonces (en este repo)  
6. [Anotaciones Generales y Puntos de Actualización](#anotaciones-generales-y-puntos-de-actualización)  
7. [Se crea una API Fake](#se-crea-una-api-fake)  
8. [Estilos de Pressable](#estilos-de-pressable)  
9. [Versiones Utilizadas](#versiones-utilizadas)  
10. [Gracias a](#gracias-a)  

---

## Descripción del Curso

En este curso, Midu enseña a crear una aplicación móvil sencilla desde cero usando **React Native** y **Expo**. A lo largo de las dos primeras clases se aborda:

- **Clase 1**: Configuración del entorno, creación de un proyecto Expo, estructura básica, componentes fundamentales (`View`, `Text`, `Image`, etc.) y estilos con `StyleSheet`.  
- **Clase 2**: Navegación entre pantallas usando **React Navigation**, consumo de APIs con `fetch`, manejo de estado con Hooks (`useState`, `useEffect`) y renderizado de listas y pantallas de detalle.

Desde la publicación original (hace más de 10 meses), algunas versiones de librerías y comandos han cambiado. En este README encontrarás anotaciones para que puedas actualizar los ejemplos a las versiones actuales de **Expo**, **React Native** y **React Navigation**.

---

## Prerequisitos y Entorno

Antes de empezar, asegúrate de tener instalado lo siguiente en tu máquina:

1. **Node .js ≥ 16.x** (se recomienda 18, 20 o 22).  
2. **npm ≥ 8.x** (o **Yarn ≥ 1.x / ≥ 3.x**).  
3. **Expo CLI** (se instala globalmente):  
   ```bash
   npm install --global expo-cli
   # o, con Yarn:
   # yarn global add expo-cli
   ```
4. Un emulador de Android (Android Studio) o iOS (Xcode) configurado, o la app **Expo Go** instalada en tu dispositivo físico.

---

## Instalación y Arranque

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/Eriold/react-native-learn.git
   cd react-native-learn
   ```
2. Instala dependencias (npm o Yarn):  
   ```bash
   npm install
   # o
   # yarn install
   ```
3. Inicia el servidor de desarrollo de Expo (con caché limpio):  
   ```bash
   expo start --clear
   ```
   - Esto abrirá el **Metro Bundler** en tu navegador.  
   - Si tienes un emulador abierto, presiona `a` (Android) o `i` (iOS).  
   - Alternativamente, escanea el código QR con la app **Expo Go** en tu dispositivo físico.

> **Nota**: En la versión original del curso se usaba `expo start -c`; hoy se recomienda `expo start --clear`.

---

## Contenido de la Clase 1

### 4.1. Introducción y Objetivos

- **Fecha de publicación original**: hace más de 10 meses.  
- **Objetivo**: Aprender a crear tu primer proyecto React Native usando Expo, conocer la **estructura de carpetas y archivos** y los **componentes básicos**.

### 4.2. Creación de la App con Expo

1. En tu terminal, ejecuta:  
   ```bash
   expo init MiAppCursoReactNative
   ```
   - Elige la plantilla **blank** (o **blank (TypeScript)** si prefieres TypeScript).  
2. Entra al directorio e inicia:  
   ```bash
   cd MiAppCursoReactNative
   expo start --clear
   ```
3. Verifica que `App.js` muestre el componente de bienvenida de Expo.

> **Anotación**: En el video se usaba Expo SDK 45. En este repo ya está apuntando a Expo SDK 48/49. Si clonas y tienes una versión anterior en `app.json`, corre `expo upgrade` para actualizar.

### 4.3. Estructura de Archivos

Al crear la app, tendrás al menos esta estructura:

```
MiAppCursoReactNative/
├─ .expo/                   # Archivos internos de Expo
├─ assets/                  # Imágenes y fuentes
│   └─ icon.png
├─ src/
│   ├─ components/          # Componentes reutilizables
│   │   ├─ Header.js
│   │   └─ CustomButton.js
│   ├─ screens/             # HomeScreen.js, DetailScreen.js, etc.
│   ├─ lib/                 # Funciones de API (getGamesList, getGameDetails)
│   └─ assets/              # Imágenes locales para el curso
├─ .gitignore
├─ App.js                   # Contenedor de navegación
├─ app.json                 # Configuración de Expo
├─ babel.config.js          # Configuración de Babel
├─ package.json
└─ yarn.lock / package-lock.json
```

Midu originalmente trabajó sin carpeta `src/`, pero hoy es buena práctica agrupar todo el código fuente dentro de `src/`.

### 4.4. Componentes Básicos y Estilos

1. **`View` y `Text`**  
   - `View` es el contenedor principal y `Text` muestra texto.  
   - Ejemplo sencillo:
     ```jsx
     import React from "react";
     import { View, Text, StyleSheet } from "react-native";

     export default function App() {
       return (
         <View style={styles.container}>
           <Text style={styles.title}>¡Hola, React Native!</Text>
         </View>
       );
     }

     const styles = StyleSheet.create({
       container: {
         flex: 1,```  # truncated for brevity (should include full content)
