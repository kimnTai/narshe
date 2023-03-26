import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const { DATABASE, DATABASE_PASSWORD } = process.env;

const uri = DATABASE!.replace("<password>", DATABASE_PASSWORD || "");

mongoose.connect(uri).then(() => console.log("mongodb 連線成功"));
