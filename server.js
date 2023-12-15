const express = require("express");
const app = express();

const port = 5000;

app.listen(port, () => {
    console.log("서버 실행");
})

app.get("/", (req, resp)=>{
    resp.sendFile(__dirname + '/app/index.html');
});

app.get("/personal-info", (req, resp)=>{
    resp.sendFile(__dirname + '/app/personal.html');
});

app.get("/education", (req, resp)=>{
    resp.sendFile(__dirname + '/app/education.html');
});

app.get("/certification", (req, resp)=>{
    resp.sendFile(__dirname + '/app/certification.html');
});

app.get("/career", (req, resp)=>{
    resp.sendFile(__dirname + '/app/career.html');
});

