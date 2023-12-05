# Dolya Frontend Project

---
### Запуск для разработки
`npm run serve`

## Builds

### Web
`ionic build`

### Android
Открыть Android Studio
`npx cap open android`
#### Первая сборка
Сначала собираем web приложение, после добавляем android исходники

`npx cap sync && npx cap add android`

#### Последующее сборка android

`ionic build && npx cap sync`
или просто 
`npm run sync`

Генерация картинок для приложения android

`npx @capacitor/assets generate --android --iconBackgroundColor '#8F59EB' --iconBackgroundColorDark '#8F59EB' --splashBackgroundColor '#8F59EB' --splashBackgroundColorDark '#8F59EB'`