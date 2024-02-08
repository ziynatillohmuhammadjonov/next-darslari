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