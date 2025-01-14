import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`serveris running on port ${port}`);
});
