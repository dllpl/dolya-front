# Dolya Frontend Project

---
### Запуск для разработки
`npm run serve`

## Builds

### Web
`ionic build`

### Android
#### Первая сборка
Сначала собираем web приложение, после добавляем android исходники

`npx cap sync && npx cap add android`

#### Последующее сборка android

`ionic build && npx cap sync`
или просто 
`npm run sync`
