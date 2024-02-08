GraphQL - bu API uchun so'rovlar tili va mavjud ma'lumotlaringiz bilan ushbu so'rovlarni bajarish uchun ish vaqti. GraphQL APIdagi maʼlumotlarning toʻliq va tushunarli tavsifini taqdim etadi, mijozlarga aynan oʻzlariga kerak boʻlgan narsani va boshqa hech narsa soʻrash imkoniyatini beradi, vaqt oʻtishi bilan API-larni ishlab chiqishni osonlashtiradi va kuchli ishlab chiquvchi vositalarini ishga tushiradi.
Bu bo'limda biz GraphQl dan fodalangan holda Wordpress CMS ning faqat headless CMS sifatida ya'ni undan faqat o'zimizga kerak bo'lgan qismidan foydalanamiz. 
Quyida biz yangi Nextjs 14 yangi yoki qo'shimchalar qo'shilgan imkoniyatlaridan tanishib chiqamiz
# Next js 10 yangiliklari:
1.  Next ni Full Stack sifatida ishlatish mumkin. Uni server kompnentlari, route handlers - (endpoint hosil qilish orqali). Prisma va Drizzle orm lar bilan alalashtirilgan holda full stack ilovalar qilishimiz mumkin.
2. Mijoz komponentlari qanday ishalydi (Client komponent) ?
- uni ishlatish uchun `use client` belgilashi orqali foydalaniladi.
3. Qanady qilib komponentni client komponent sifatida belgilash mumkin ? 
-  Server komponent va client komponentlarni ishlatishda client ichida server komponentni import qilib bo'lmaydi. Agar client komponent ichida boshqa component import qilinsa belgilanish kiritilmasa ham uni client komponent sifatida e'lon qiladi.
4. Server yoki klient komponentinidan qanday foydalaniladi ?
- Ummumiy komponentlarni mijoz komponent qilmaslik kerak sababi ularga kelgan komponentlar ham client bo'lib qoladi. Shuning uchun odatdagi holatda qoldirish kerak. Shunda klient komponentlar kichik bo'lsa yaxshi bo'ladi. 
5. Mijoz komponent ichiga qanday qilib server komponent joylash mumkin ?
- Agar biz qandaydur holatda mijoz komponent ichida serve komponent ishltishimiz kerak bo'lib qolsa bunday holatda biz server komponentni props ichida children qilib berib uni kerakli faylga joylashimiz mumkin.
6. Children ichida mijoz komponentini serever komponetda foydalanishimiz mumkinmi ?
- Bu ham yuqoridagi misolga o'xshash bo'lib ichida children olgan holatda ham mijoz komponent ham server komponentdan foydalanishimiz mumkin. 
7. Server components va SSR
- Server komponent o'zi nimaga kerak axir odatda komponentlar SSR bo'lsa ? Server komponentlar SSR ga qo'shimcha quyidagi imkoniyatlarni qo'shib oladi o'ziga:
- Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
- Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
- Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
- Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
- Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
- Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
- Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.
Server komponentlar sezuvchi ma'lumotlar (token va boshqalar...) xavfsiz bo'lishini ta'minlaydi. 
8. Server components, client components, SSR, SSG.
- 
9. API routlar nima va nima uchun ular kerak ?
- Bu imkoniyatlar Route Handlers degan nom bilan ataladi. Bu bizga mijozdan ko'rmaydigan holatda route.tsx faylidan foydalangan holatda barcha turdagi so'rovlarni yuborish va bu so'rovlarni mijozga ko'rsatmasligimzi mumkin.
```
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}
```
10. State managment kutubxonalari Next ichdagi.
- Redux va Zustand kutubxonalarini faqat client komponentlarida foydalanishni tavsiya qilishadi. Next js o'zi esa bu kabi kutubxonalar o'rniga fetch yoki cashe lardan foydlanishni tavsiya qiladi. Sababi bu barcha komponentlarda birdek ishalyveradi,