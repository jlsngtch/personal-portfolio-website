require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/ContactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("my-app/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
