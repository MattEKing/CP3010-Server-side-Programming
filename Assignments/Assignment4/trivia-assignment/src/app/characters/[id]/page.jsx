
import CharacterDetails from "../../components/characterDetails."

export async function generateStaticParams() {
    return [{id: "1"}]
}

export default async function({params}) {

    const { id } = await params
    
    return(
        <CharacterDetails id={id}></CharacterDetails>
    )
}