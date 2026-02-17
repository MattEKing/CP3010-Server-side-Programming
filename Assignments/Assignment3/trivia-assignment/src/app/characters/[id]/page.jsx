
import CharacterDetails from "../characterDetails."

export default async function({params}) {

    const { id } = await params
    
    return(
        <CharacterDetails id={id}></CharacterDetails>
    )
}