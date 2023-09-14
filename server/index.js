import cors from "cors"
import express, { request, response } from "express"
import { dowload } from "./dowload.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  dowload(request.params.id)

  response.json({ result: "Download realizado com sucesso" })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
