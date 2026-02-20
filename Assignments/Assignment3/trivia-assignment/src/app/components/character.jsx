import Link from "next/link"

export default function Character({id, name}) {
    return (
      <Link href={"/characters/" + id}>{name}</Link>
    )
} 