
import CharacterDetails from "../../components/characterDetails."

export default async function({params}) {

    const { id } = await params
    
    return(
        <CharacterDetails id={id}></CharacterDetails>
    )
}