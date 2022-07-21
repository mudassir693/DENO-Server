import {Bson,MongoClient} from "https://deno.land/x/mongo@v0.30.1/mod.ts";


let client = new MongoClient()


await client.connect('mongodb+srv://mudassir456:mudassir456@cluster0.bi8q1.mongodb.net/DENO_Server?authMechanism=SCRAM-SHA-1')

const db = client.database("DENO_Server")

export default db