# Texnik vazifa
**Vazifa**
- **React**'da 2 ta sahifali kichik kinoportal yasash:
1. **Asosiy sahifa**.
     - O'z ichiga olishi kerak: 
       1. Kinolar ro'yhati
       2. Sahifalovchi (Pagination)
       3. Har bir film elementida poster va film nomi bolishi cera 
2. **Tanlangan filmni to'liq ma'lumotini ko'rish sahifasi**. 
     - O'z ichiga olishi kerak:
        1. Poster
        2. Film nomi
        3. Film izohi
        4. Yil
        5. Davlat
        6. Janr
        7. Demo video qo'yilgan player

`*`**Eslatma**. **React Router**, **Redux** bibliotekalarini ishlatilishi shart

---

**Vazifa muddati**
- 3 kun *(29.04.2022 dan)*

---

**Kontentdan foydalanish huquqi**

Sizga serverdan **`JSON`** formatida ma'lumotlarni olish uchun individual sirli **`token`** taqdim etiladi. Vazifa muddati tugashi bilan, ma'lumotlarni olishni imkoni bo'lmaydi.

**Ma'lumotlar olish uchun sizing kalitingiz**

> user => "a71651276800s055120e1a6ffaa1ec27"
- Vazifaga ajratilgan vaqt muddatining tugashi: *1651535999 (TIMESTAMP - EPOCH)*
- Serverga so'rov ko'rinishi: **`https://api.itv.uz/api/content/main/2/list?user=<token>`**

`*`**Eslatma**. Server **CORS - Cross-origin resource sharing** orqali himoyalangan

**REST API**

- Request method: **`GET | POST`**
- Response type: **`JSON`**
- Main url: **`https://api.itv.uz`**

1. Kinofilmlar ro'yhatini olish uchun API: **`https://api.itv.uz/api/content/main/2/list?user=<token>`**

**Javob**
```ts
{
  "code": number,
  "message": string,
  "language": string,
  "subscription_status": string,
  "need_update": boolean,
  "operator_id": number,
  "traffic": boolean,
  "data": {
    "items_per_page": number,
    "total_items": number,
    "movies": Array<{
        "id": number,
        "title": string,
        "year": number,
        "params": {
          "is_hd": boolean,
          "is_3d": boolean,
          "is_4k": boolean,
          "is_new": boolean,
          "is_free": boolean,
          "is_tvshow": boolean
        },
        "files": {
          "poster_url": string
        }
      }>
  }
}
```

2. Sahifalash **`GET`** so'roviga **`page=<sahifa raqami (int)>`**: qo'shish orqali amalga oshiriladi **`https://api.itv.uz/api/content/main/2/list?page=1&user=<token>`**

3. Kino to'liq ma'lumotini olish uchun API.
**`https://api.itv.uz/api/content/main/2/show/{id}?user=<token>`**
   - Kinofilmlar ro'yhatida har bir filmni individual IDsi taqdim etiladi, **`id: int`**, bu IDni siz to'liq ma'lumot olish uchun so'rovda yuborishingiz kerak: **`https://api.itv.uz/api/content/main/2/show/1?user=<token>`**

**Javob**
```ts
{
  "code": number,
  "message": string,
  "language": string,
  "subscription_status": string,
  "need_update": boolean,
  "operator_id": number,
  "traffic": boolean,
  "data": {
    "movie": {
      "id": number,
      "payment_type": string,
      "year": number,
      "title": string,
      "title_eng": string,
      "description":string,
      "countries_str": string,
      "genres_str": string,
      "rates": {
        "imdb": number | string,
        "kinopoisk": number | string,
        "itv": number | string
      },
      "params": {
        "is_sd": boolean,
        "is_hd": boolean,
        "is_3d": boolean,
        "is_4k": boolean,
        "is_new": boolean,
        "is_free": boolean,
        "is_tvshow": boolean
      },
      "files": {
        "poster_url": string,
        "list": Array<{
            "file_id": number,
            "quality": string
          }>,
        "snapshots": Array,
        "trailers": Array
      },
      "directors": Array<{
          "id": number,
          "name": string,
          "photo_url": string
        }>,
      "scenarists": Array<{
          "id": number,
          "name": string,
          "photo_url": string | null
        }>,
      "producers": Array<{
          "id": number,
          "name": string,
          "photo_url": string | null
        }>,
      "actors": Array<{
          "id": number,
          "name": string,
          "photo_url": string | null
        }>,
      "movies": Array<{
          "id": number,
          "title": string,
          "year": number,
          "params": {
            "is_hd": boolean,
            "is_3d": boolean,
            "is_4k": boolean,
            "is_new": boolean,
            "is_free": boolean,
            "is_tvshow": boolean
          },
          "files": {
            "poster_url": string
          }
        }>
    }
  }
}
```
