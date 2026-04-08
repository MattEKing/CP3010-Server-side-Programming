export async function GET() {
    const {db} = await connectToDB();
    const characters = await db.collection("characters").find({}).toArray();
    console.log(characters.toString());
    return new Response(JSON.stringify(characters),
    {status: 200,
     headers: {"Content-Type": "application/json"}
    })
};
