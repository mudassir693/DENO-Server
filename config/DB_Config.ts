import {Bson,MongoClient} from "https://deno.land/x/mongo@v0.30.1/mod.ts";
import config from './env.ts'


let client = new MongoClient()


await client.connect(config.Mongo_URL)

const db = client.database("DENO_Server")

export default db