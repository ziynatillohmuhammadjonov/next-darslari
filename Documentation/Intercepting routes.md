# Tushunarli router.
Bu routerlar bizga bir joyda turgan holatda boshqa routdagi komonentni nusxasini ko'rsatishn iimkonini beradi. Shu ko'ringan vaqtda orqa planda marshutizatsiya ham bo'lgan bo'ladi. Agar shu holatda sahifa yangilansa biz kerakli marshutdagi yo'nalgan sahifani ko'rishimiz mumkin.
Bunga misol sifatida modal oyna ochilishini qachonki foydalnuvchi ro'yxatdan o'tmoqchi bo'lsa. Shu modal bilan bir qatorda u agar sahifani refresh qilsa avtomatik /login pagesiga o'tib ketadi. Yoki yangiliklar lentalari ro'yxatida agar uni ustiga bosilsa yangilikni qisqa shakli, agar shu sahifa refresh qilinsa (hard navigation) yoki biror tugma bosilsa shu yangilikni to'liq shaklini olishi kabi jarayonlarni ko'rishimiz mumkin. 
Undan foydalanish uchun kerkli ya'ni Intercepting routes qiladigan papkamizni oldiga mos ravishda qavs ichida nuqtalar bilan papka nomini yozib qo'yamiz. Nuqtalar soni qancahlik oldinga ya'ni asosiy ildiz papkaga qarab yurishimiz kerakligini belgilaydi.

- (.) to match segments on the same level
- (..) to match segments one level above
- (..)(..) to match segments two levels above
- (...) to match segments from the root app directory
So'ngra uni ichida yo'nalgan segment papkamizni klonini yasamiz. E'tibor bering tanlangan segmentda biz yozilgan segmentda fay bo'lishi kerak shunda hard navigationda o'sha segmentda yo'llanib natijada hatolik yuzaga kelmaydi. Aks holda xatolik yuzaga kelishi mumkin.
So'ng biz soft navigatsiya orqali (bizning misolda /login marshruti) kerakli marshrutga yo'llasak biz avval tayyorlagan (.)login/page.tsx ga marshrutlanadi so'ng unida refresh qilsak asosiy papkadagi /login ga marshrutlanadi.