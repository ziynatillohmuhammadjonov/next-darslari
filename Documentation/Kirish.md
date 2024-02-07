Next.js 
NextJs - bu freymowork web ilovalarni quradigan React kutubxonasi asosidagi. React Vue kabi kutbxonalar bizga fayl strukturalarini istalgan holda qilishni yo'lini bersa Bu kab META-FRAMEWORK larda o'zini chegaralari. Sababi bu server va foydalanuvchi kompoentlari hisoblanadi. 
Asosiy afzalliklari bu uni har bir sahifani pre-rendering qiladi ya'ni un iavvaldan reder qilib qo'yadi huddi React kabi. Yoki so'rov paytida ham render qilishi mumkin.
Next da 4 xil rendering turi mavjud. Odatda 
- Server-side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Client-side Rendering (CSR)
Next js da pre-renderingni ikki hil formasi mavjud: Static Generation va Server-side Rendering bo'lib ularni assosiy farqi 'qachon' render qilishida. 
    - Static Generation - da HTML build qurish jarayonida generatsiya qilinib va har bir so'rov vaqtida qayta foydalaniladi.
    - Server-side Rendering - da HTML har so'rov vaqtida generatsiya qilinadi.
Bular asosiy turlar bo'lib qo'shimcha ravishda ISR ham mavjud bo'lib u bizga hamma sahifani qayta yangilanish o'rniga faqat o'zgargan sahifalarni yangilanish imkonini beradi.  
Agar biz server sayt renderingdan foydalanmoqchi bo'lsak uni quydagicha qilamiz. 
```
export default function Page({data}){
    //render data .....
}

//Har bir so'rovda chaqiriladi.
export asyn function getServerSideProps(){
    const req = await fetch(url)
    const data = await req.json()

    //Props ichida ma'lumotni qo'yish
    return {
        props: data
    }
}
```
Bunda shu sahifaga har safar murojaat bo'lganda getServerSideProps() dastlab ishlab uni ichidagi qiymat props sifatida ichiga keladi Page() funksiyani. Shunda Next buni SSR ekanligin aniqlayi.
Agar biz static site rendering qilmoqchi bo'lsak uni quyidagicha qilamiz:
```
export default function Blog({data}){
    //render data .....
}

//Har bir so'rovda chaqiriladi.
export asyn function getStaticProps(){
    const req = await fetch(url)
    const data = await req.json()

    //Props ichida ma'lumotni qo'yish
    return {
        props: data
    }
}
```
Bunda Next getStaticProps() funksiyasini SSR komponentiga tegishli ekanini bilib uni qurish vaqtida render qiladi.
Agar biz url da dinamik qismi orqali kirishimiz kerak bo'lsa misol uchun post lar bo'li uni ichiga id orqali kirishimi kerak bo'lsa uni avval generatsiya qilib olishimiz kerak. SSG uchun buni amalga oshirish uchun 
```
export default dunction Post ({post}){
    // render post
}


export async function getStaticPaths(){
    // Postlarni olish uchun  so'rov yuborish
     const req = await fetch(url)
    const posts = await req.json()

    //papka larni olish biz pre-renderid qilishimiz uchun. 
    const paths = posts.map((post)=>({
        params:{
            id: post.id
        }
    })) 
    // faqat shu fayl pldin render bo'ladi buld vaqtida
    // {fallback: false} - boshqa routlar 404 qaytarishi mumkin
    return {paths, {fallback:false}}
}

//Har bir so'rovda chaqiriladi.
export asyn function getStaticProps({params}){
    //params o'z ichiga post id sini oladi
    const req = await fetch(`url/${params.id}`)
    const post = await req.json()

    //Props ichida ma'lumotni qo'yish
    return {
        props: {post}
    }
}
```

ISR - buni biz getStaticProps() funksiyasi ichiga `revalidete:10`  qo'yish orqali qilamiz. Bunda berilgan sondagi soniyadan so'ng server tekshiriladi agar o'zgarish bo'lsa qayta render qilinadi.

```
export default dunction Post ({post}){
    // render post
}


export async function getStaticPaths(){
    // Postlarni olish uchun  so'rov yuborish
     const req = await fetch(url)
    const posts = await req.json()

    //papka larni olish biz pre-renderid qilishimiz uchun. 
    const paths = posts.map((post)=>({
        params:{
            id: post.id
        }
    })) 
    // faqat shu fayl pldin render bo'ladi buld vaqtida
    // {fallback: false} - boshqa routlar 404 qaytarishi mumkin
    return {paths, {fallback:false}}
}

//Har bir so'rovda chaqiriladi.
export asyn function getStaticProps({params}){
    //params o'z ichiga post id sini oladi
    const req = await fetch(`url/${params.id}`)
    const post = await req.json()

    //Props ichida ma'lumotni qo'yish
    return {
        props: {post},
        revalidete:10 // har 10 sekunda serverga so'rov yuborib turadi o'zgarishni tekshirgani.
    }
}
```
Odatiy holdagi Next static site renderingdan foydalanadi.

```
interface Props {
    params: {
        id: string
    }
}

export default function IdPost({ params }: Props) {

    return (
        <div>
            <h1>Post with id {params.id}</h1>
            <br />
            <p>
                Agar biz faqatgina /slug emas balki /slug/lug/lu... kabilar kerak bo'lsa uni olin olish uchun papkani [ichiga] ... (uch nuqtani oldiga yozib qo'yamiz) [...id] kabi bu bizga barcha shu marshrut ichidgi paramslarni olish imkonini beradi.
            </p>
            <br />
            <h4>Post width ...id {JSON.stringify(params)}</h4>
        </div>
    )
}
```
Yuqoridagi misolda biz dinamic render qilishi ko'rdik. Bunda saytni routiga mos ravisha routing bo'ladi dinamik renderning.

Agar biz static rendering qilmoqchi bo'lsak lekin bizga routerlar no'malum bo'lsa biz avval barcha routerlarni olib kelib olishimiz kerak. So'ngra ularni render qilsak bo'ladi. Bunda foydalanuvchi sahifasi yangilanmasdan kiradi. Bu orqali dinamik renderingni bizga ma'lum bo'lamagn qismin ham statik qilishimiz mumkin. Va barcha sahifalar statik bo'ladi. Buni dinamik qisimdagi getStaticParams() funksiyasi orqali amalga oshiramiz.
```
interface iPost {
    params:{
        slug:string
    }
}

export default function Post({params}: iPost){
    return(
        <h1>Post with slug {params.slug}</h1>
    )
}

export async function generateStaticParams (){
    const films = await fetch('https://swapi.dev/api/films').then((res)=>res.json())
    return films.results.map((film:any)=>({
        slug:film.title.replace(/\s+/g, '-')
    }))
}
```
So'ng loyihamizni build qilganimizda barcha componentlar static bo'lib avvaldan tegishli url orqali yuklanib bo'lgan bo'ldi. Build qilganimizda quydagicha ko'rinishda habar beriladi consolda
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
Bunda ko'radigan bo'lsak post ichida [slug] ishlatsak ham uni ichidagini getStaticParams() funksiyasi statik qilib hamasini bazadan yuklab olgan bo'ladi.


