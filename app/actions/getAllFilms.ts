export function getAllFilms():Promise<FilmResponse>{
    return fetch('https://swapi.tech/api/films').then((res)=>res.json())
}