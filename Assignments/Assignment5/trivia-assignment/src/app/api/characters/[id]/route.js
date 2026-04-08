import { connectToDB } from "@/app/api/db.js";
import { ObjectId } from "mongodb";

export async function GET( request, {params}) {
    const {db} = await connectToDB();
    const {id} = await params;
    const character = await db.collection("characters").findOne({_id: new ObjectId(id)});
    if (!character) {
        return new Response("Character not found", {status: 404});
    }
    return new Response(JSON.stringify(character),
     {status: 200, headers: {"Content-Type": "application/json"}});
} 