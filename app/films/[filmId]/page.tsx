import { getAllFilms } from "@/app/actions/getAllFilms"
import getFilm from "@/app/actions/getFilm"

interface Params{
    params:{
        filmId: number
    }
}

export default async function FilmPage({params:{filmId}}: Params) {
    const film = await getFilm(filmId)
    
    return(
        <div>
            <h1>{film.result.properties.title}</h1>
        </div>
    )
}

// Statik qilib ma'lumotlarni olib kelish uchun uni generateStatisParams() funksiyasi orqali chaqirib olamiz.
export async function generateStaticParams(){
    const films = await getAllFilms()
    return films.result.map(film=>({
             filmId: film.uid
        }))
}
