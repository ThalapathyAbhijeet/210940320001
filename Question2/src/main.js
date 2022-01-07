const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { addmessage} = require("./user.js")

const cors = require("cors");
app.use(cors());

app.post("/us", async (req, res) => {


    const MESSAGES = req.body;
    await addmessage(MESSAGES);
    res.json({ message: "Added Successfully" });



});

app.get("/take", async (req, res) => {
    const list = await All();
    res.json(list);
});

app.listen(4000, () => console.log("server started"));