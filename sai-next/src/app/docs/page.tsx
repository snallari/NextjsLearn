export default async function Docs({
    params
}:{params:Promise<{slug:string[]}>}){
    const {slug}=await params
    if(slug.length>0){
        return(
            <h1>
                Docs slug: {slug.join("/")}
            </h1>
        )
    }else{
        return <h1>{slug}</h1>
    }
    return(
        <h1>
        Documentation
        </h1>
    )
}