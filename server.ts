console.log('DENO is running on port 5000');
import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";

// importing local modules:
import userAuth from './router/authRoute.ts'

const app = opine();

app.get("/", function (req, res) {
  res.setStatus(200).json({data:"Hello DENO... 🦕"});
});

app.use('/api',userAuth)

app.listen(
  5000,
  () => console.log("🦕 server has started on http://localhost:5000 🚀"),
);