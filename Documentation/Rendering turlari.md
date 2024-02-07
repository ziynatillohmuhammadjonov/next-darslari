Next da 4 xil rendering turi mavjud. Odatda 
- Server-side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR) - SSG kabi bo'lib undan farqli ravishda faqat ma'lum qismini render qilish uchun ishlatiladi.
- Client-side Rendering (CSR) - odatiy render turi Next buni odatda qo'llaydi.
Demak asosiy ikki turi qolayapti. SSR - rendering server qismida bo'ladi. Har bir so'rov serverda huddi PHP, Phyton va boshqa kabi. 
SSG - render HTML mijoz so'raganida render qilinmay unda avval qilinadi. Yani loyiha yig'ilayotga vaqtda qilinadi. 
Agar biz SSR dan foydalanmoqchi bo'lsak getServerSideProps() - funksiyasidan,
SSG - dan foydalanmoqchi bo'lsak getStaticProps() - funksiyasidan,
ISR - dan foydalanmoqchi bo'lsak getStaticProps() ichida return ichda `revalidate:10` funksiyasidan foyalnishimiz kerak.

Biz o'zimiz belgilasak sahifani SSR roki SSG shunga qarab Next un ibuld qiladi. Agar uni belgilamasak ularn SSG qiladi. Qaysi fayl qanday renderingdan foydalanilganini ko'rish uchun buld qilinganda uni build consolidagi 
```
Route (app)                              Size     First Load JS
┌ ○ /                                    141 B          84.3 kB
├ ○ /_not-found                          882 B            85 kB
└ ● /post/[slug]                         141 B          84.3 kB
    ├ /post/A-New-Hope
    ├ /post/The-Empire-Strikes-Back
    ├ /post/Return-of-the-Jedi
    └ [+3 more paths]
+ First Load JS shared by all            84.1 kB
  ├ chunks/69-1b6d135f94ac0e36.js        28.9 kB
  ├ chunks/fd9d1056-cc48c28d170fddc2.js  53.4 kB
  └ other shared chunks (total)          1.87 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)
```
orqali bilib olishimiz mumkin. Bular barchasidan Next js o'zi qayg'uradi. Agar qandaydur sabab bilan sahifa SSG bo'lmay qolsa avtomatik ravishda uni SSR ga o'tkazadi. Osha sahifa serverda render qilindi. 
Render turlari: Static va dinamik rendering
- Static rendering build qilish vaqtida yig'iladi va keshlanadi. So'ng shular asosida qayta foydalanilaveradi.
- Dinamik rendering HTML har bir so'rovda alohida generatsiya qilinadi. 
# Static data fetching (Default)
Bu odatda biz qaysi turdagi renderingdin foydalanishni aytmasak Next o'zi tanlaydigan rendering bo'lib. Uni biz ichida hech nima ishlatilmagan fetch() so'rovimizda o'zi avtomatik qiladi. bu fetch ichida cashe:force-cashe kabi o'zi yozib oladi desak ham bo'ladi. Agar fetch ichida `revalidate:` opsiyasidan foydalansak u kerakli vaqtda qayta rendere bo'lib Static bo'ladi.
# Dynamic Rendering
Dinamik funksiyalar - cookie va headers fetch ichidagi.

Rendering shartlari.
Data fetching                 Dynamic Function                    Rendering

1. Satic(Cashed)                         No                           Static 
2. Static(Cashed)                        Yes                          Dynamic
3. Not cashed                            No                           Dynamic
4. Not cashed                            Yes                          Dynamic 


Quyida biz dinamik renderni ko'ramiz.
```
import { getAllFilms } from "../actions/getAllFilms";

export default async function FilmsPage() {
    const allFilms = await getAllFilms()

    return (
        <div>
            {allFilms.results.map(film=>(
                <div key={film.url}>{film.title}</div>
            ))}
        </div>
    )
}
```
Bu jarayon react bilan tanish bo'lmagan odamlarga tushunarli lekin React bilan tanish bo'lganlarga esa bu biroz noto'g'riga o'xshab ko'rinadi. Sabab odatda React ishlatilinganda fetch so'rovlar useEffect ichida qilinib natija useState orqali olinar edi. Lekin ulardan farqli ravishda bu jarayon so'rov yuborilgan vaqtda bir marta amalga oshiriladi. Nextda komponentlar odatda server komponent bo'ladi shuning uchun u yerda console.log() ishatilsa natija konsoleda vscodeda chiqadi. Agar 'use client' komponentida ishlatilsa console.log() brauzerda ko'rinadi. 
Agar biz buni buld qilsak va terminalni ko'rsak unda bizning FilmsPage() funksiyamiz ham static bo'lganini ko'ramiz. Bu bizning 1- rendering shartiga to'g'ri keladi. Sababi bu yerda dinamik funksiya ishlatilinmadi. 
Batafsil ko'radigan bo'lsak fetch bo'ladigan funksiyada 
```
export function getAllFilms():Promise<FilmResponse>{
    return fetch('https://swapi.dev/api/films').then((res)=>res.json())
}
```
hech qanday qo'shimcha parametrlar bermadik shuni hisobiga funksiya statik bo'ldi. 
```
fetch('https://swapi.dev/api/films').then((res)=>res.json())
```
va 
```
fetch('https://swapi.dev/api/films', {cache: 'force-cashe'}).then((res)=>res.json())
``` 
ekvivalent ya'ni ma'lumotlarni keshlamaydi.
fetch('https://swapi.dev/api/films', {cache: 'force-cashe'}).then((res)=>res.json()) - SSG
fetch('https://swapi.dev/api/films', {cache: 'no-store'}).then((res)=>res.json()) - SSR
fetch('https://swapi.dev/api/films', {next:{revalidate: 60}}).then((res)=>res.json()) - ICR
Aagar biz fetch so'rovni ishlatmasak uni o'rniga boshqa so'rovlardan paketlardan foydalansak bunday holatda biz kerakli komponent ichida 
Option	            Type	                                                        Default
dynamic	            'auto' | 'force-dynamic' | 'error' | 'force-static'	          'auto'
dynamicParams	      boolean 	                                                     true
revalidate	        false | 0 | number	                                           false
fetchCache	        'auto' | 'default-cache' | 'only-cache' | 'force-cache' | 
                    'force-no-store' | 'default-no-store' | 'only-no-store'	       'auto'
runtime	            'nodejs' | 'edge'	                                             'nodejs'
preferredRegion	    'auto' | 'global' | 'home' | string | string[]	               'auto'
maxDuration         number	                                                       Set by deployment platform


