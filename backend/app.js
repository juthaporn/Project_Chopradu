const express  = require('express');
const app = express();
const db = require("./util/database");

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/test", function (req, res) {
    res.json({"message": "hello world"});
})

const member = require('./routes/member')
const shop = require('./routes/shop')

app.use("/member", member)
app.use('/shop', shop)

app.listen(3000); 