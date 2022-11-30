import router from "./routes/english_routes.js";
import spanishRouter from "./routes/spanish_routes.js";
import germanRouter from "./routes/german_routes.js";
import frenchRouter from "./routes/french_routes.js";
import express from "express";
import morgan from "morgan";
import cors from 'cors'

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/englishDefinitions", router);
app.use("/api/spanishDefinitions", spanishRouter);
app.use("/api/germanDefinitions", germanRouter);
app.use("/api/frenchDefinitions", frenchRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});


export default app;

