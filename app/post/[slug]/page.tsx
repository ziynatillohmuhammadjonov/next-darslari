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