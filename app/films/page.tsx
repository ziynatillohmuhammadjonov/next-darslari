import Link from "next/link";
import { getAllFilms } from "../actions/getAllFilms";
// export const dynamic = 'force-dynamic' - componentni dinamik qilish uchun foydalaniladi.

export default async function FilmsPage() {
    const allFilms = await getAllFilms()

    return (
        
        <div className="container mx-auto">
            <h2>Films list: </h2>
            <ul>
            {allFilms.result.map(film=>(
                <li key={film.uid}>
                    <Link href={`/films/${film.uid}`}>{film.properties.title}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}