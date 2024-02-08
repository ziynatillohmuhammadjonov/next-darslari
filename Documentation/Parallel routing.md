Next js bizga parallel routing uslibini taqdim qiladi.
Bu bir vaqtning o'zida ikkida pathga marshrutga murojaat qilishga imkon berib u orqali parallel ravishda ularni olib kelb ishlatishga imkon beradi. Paralell routingdan foydalanishda maxsus `@` (at) mail belgisini papkadan oldin qo'yiladi. 
!!!Diqqat: 
        Agar ichki pathda layout ishlatilsa un i ichini ildiz layout nkabi to'ldirilmaydi. Aks holda ichma ich html teg bo'lib ketadii. Agar meta qiymatlar yozilmqchi bo'lsa shunchaki Metadata next dan chaqiriladi va uni ichiga yozilaveradi uni ulash shart emas.
Paralell routing qilishda papka nomi o'zgaragndan so'ng uni ichga page.tsx ochib to'ldiriladi. So'mg paralell router uchun tashkillangan papka nomlari shu rout joylashgan ildiz papka layoutiga props qilib beriladi. So'ngra childern dan keyin {papkaNomi} shklida qo'yiladi. 
- Qo'shimcha agar ildiz faylda `loading.tsx` fayili layout bilan bir qatorda yasalsa uni Next ma'lumot kelgungacha kutib turganda o'qib foydalanuvchiga ko'rsatadi.
Ikki xil navigatsiya turlari mavjud bo'lib bular hard navigation va soft navigation.
- Hard navigation - butun sahifa yuklangandan so'ng (brauzer refresh bo'lgandan so'ng) Nextjs aniqlay olmaydi aktiv qismini slotlarni shu URL ga tegishli bo'lgan. Uni o'rniga Next default.js papkasini qaytaradi yoki uni o'rniga 404.
- Soft navigation - Brauzer qattiq navigatsiyalanishni qo'llaydi sahifalar o'rtasida o'tishda. Next ilovasi esa soft navigatsiya yumshoq navigatsiyadan foydalanadi. Qisman navigatsiya qilish orqali shunday jarayon sodir bo'ladi. Bu navigatsiya vaqtida React mijozini tarkibini saqlashga yordam beradi. 


Paralell routingdan foydalanganimizda next kelgan paralell routlarni ham children kabi ko'rishi hisobiga agar biz parallel rout bo'layotgan idiz papkada yangi marshrut ochsak parallel routing papkalariga bog'liq bo'lmagan holda next yangi marshrutni p/r ichidan ham qidiradi agar ular bo'lmasa hatolik yuzaga kelib 404 qaytadi. Bu jarayonni oldina olish uchun:
- Ham ildiz papkada ham barcha p/r bo'ladigan papkalar ichida bir hil nomli marshrut ochish kerak.
- Qaysi birida bu yangi ochilishi kerak bo'lgan marshrut bo'lmasa o'sha papkada `default.tsx` ochib uni ichiga mos qiymat yoki null qaytarish kerak
shunda nextda hech qanday xatoliklar yuzaga kelmay paralell routing jarayoni yondosh jarayon sifatida sodir bo'laveradi.
E'tibor bering bu jarayon hatolik kelishi faqat hard navigationda sodir bo'ladi. Agar Next o'zining ichki Link komponentindan foydalangan holatda route qilsa bu hatolik bo'lmaydi lekin o'sha yerda agar sahifa yangilansa hatolik yuzaga keladi.

                    With @analytics/default.js                          Without @analytics/default.js

Soft                @team/settings/page.js and                          @team/settings/page.js and
Navigation          @analytics/page.js                                  @analytics/page.js

Hard                @team/settings/page.js and                                  404
Navigation          @analytics/page.js
