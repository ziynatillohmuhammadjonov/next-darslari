export default function getFilm(id:number):Promise<OneFilmResponse>{
    return fetch(`https://www.swapi.tech/api/films/${id}`).then((res)=>res.json())
}