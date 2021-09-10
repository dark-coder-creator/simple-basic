const https=require('https')
const url='https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'

const request=https.request(url,(response) =>{
    let data=' '
    response.on('data',(chunk) =>{
        data=data + chunk.toString()
      
    })
    response.on('end',() =>{
      const body=JSON.parse(data)
      console.log(body)
    })
})
request.on('error',(error) =>{
    console.log('An Error',error)
})
request.end()