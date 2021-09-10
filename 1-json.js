const fs=require("fs")
const jsonData={
    "name":"Saravanan",
    "about":"cool",
    "age":"23"
}

const dataBuffer=fs.readFileSync('1-json.json')
console.log(dataBuffer)
 const data=JSON.parse(dataBuffer)
 data.name="Mohandas"
 data.about="cool"
 const datas=JSON.stringify(data)
fs.writeFileSync('1-json.json',datas)

console.log(data)