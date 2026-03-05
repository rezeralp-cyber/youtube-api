import express from "express"
import { exec } from "child_process"

const app = express()

app.get("/", (req,res)=>{
res.json({status:true,message:"YouTube API running"})
})

app.get("/ytmp3",(req,res)=>{
let url = req.query.url

if(!url){
return res.json({status:false,message:"url kosong"})
}

exec("yt-dlp -x --audio-format mp3 "${url}"",(err)=>{
if(err){
return res.json({status:false,error:String(err)})
}

res.json({
status:true,
message:"audio berhasil diproses"
})
})

})

app.listen(3000,()=>{
console.log("API running on port 3000")
})
