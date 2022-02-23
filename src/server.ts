import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import orderRoutes from "../src/handlers/Order";
import productRoutes from "./handlers/Product";

const app: express.Application = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log(`starting app on: ${port}`);
});

orderRoutes(app);
productRoutes(app);
