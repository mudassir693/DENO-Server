import { config as cfg } from "https://deno.land/x/dotenv/mod.ts";

console.log(cfg());
const config = cfg()

export default config