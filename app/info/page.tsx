import Link from "next/link"

 const InfoPage =async ()=>{
    return (
        <div>
            <h4>Info Page</h4>
            <Link href={'/info/map'}>Map</Link>
        </div>
    )
}
export default InfoPage
