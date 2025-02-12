import express from "express"
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 5051;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/rahman", (req, res)=>{
    try{
        res.status(200).json({msg: "hello rahman"})
    } catch(error){
        res.status(401).json(error)
    }
 });
 

 app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "dist", "index.html"));
 });

 app.listen(PORT, ()=>{
    console.log('YOUR SERVER IS UP AND RUNNING!');
    
 })
