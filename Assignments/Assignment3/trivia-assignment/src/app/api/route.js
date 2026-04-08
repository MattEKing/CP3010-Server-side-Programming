import { connectToDB } from "@/app/api/db.js";

export async function POST(request) {
    const {db} = await connectToDB();
    const newcharacter = await request.json();
    const result = await db.collection("characters").insertOne(newcharacter);

    return new Response(
        "Character added successfully" + result.insertedId,
        {status: 201}
    );
}