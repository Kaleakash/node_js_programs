"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("Simple express module created...");
});
app.post("/post", function (req, res) {
    console.log("Post method");
    res.send("Post method");
});
app.put("/put", function (req, res) {
    console.log("put method");
    res.send("put method");
});
app.delete("/delete", function (req, res) {
    console.log("delete method");
    res.send("delete method");
});
app.listen(9090, function () { return console.log("Server is running on port number"); });
