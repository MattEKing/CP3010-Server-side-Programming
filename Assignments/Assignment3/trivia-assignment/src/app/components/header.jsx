import Link from "next/link"

export default function Header() {
    return(
        <>
        <div style={{'text-align': "center", fontSize: "larger"}}>
                <Link href={"/"}>Home |</Link> 
                <Link href={"/characters/"}> Characters</Link>
        </div>
        </>
    );
};