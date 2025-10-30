Orbis — Cómo ejecutar (rápido)

Requisitos
- Node.js (versión recomendada >= 14/16)
- Java JDK y Android SDK instalados
- Android Studio (opcional para emuladores)
- Tener `ANDROID_HOME` o `local.properties` configurado para SDK

1) Instalar dependencias (PowerShell)

npm install

2) Levantar servidor de desarrollo (Vite)

npm run dev

- Por defecto Vite sirve en http://localhost:5173
- Si usas la tarea de VS Code: ejecuta la tarea "npm: dev"

3) Sincronizar Capacitor con Android

npx cap sync android

4) Abrir Android Studio desde Capacitor (o usar Gradle)

npx cap open android
# O para compilar desde terminal (Windows PowerShell)
cd android
.\\gradlew.bat assembleDebug

5) Ejecutar en emulador o dispositivo
- Desde Android Studio: Run > app
- O usando adb install con el APK resultante en `android/app/build/outputs/apk/...`

Resolución rápida de problemas
- Puerto ocupado: ver qué proceso usa 5173 y cambiar `vite` o cerrar proceso.
- SDK no encontrado: configura `local.properties` con `sdk.dir=C:\\Users\\<tu_usuario>\\AppData\\Local\\Android\\sdk`
- Error gradle: ejecutar `.\\gradlew.bat --stacktrace` desde `android` para más detalles.

Si quieres que ejecute tareas desde aquí, dime cuáles (por ejemplo: "ejecutar npm install").
