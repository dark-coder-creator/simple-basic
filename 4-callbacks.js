//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
var a,b
const add=(a,b,callback) =>{
    setTimeout(() =>{
        const sum=a+b
        callback(sum)
    },2000)
  
}
add(5, 4, (sum) => {
    console.log("Sum is "+sum) // Should print: 5
})




setTimeout(() =>{
    console.log('two seconds are up')
},2000)

const names=['Saravanan','Mohandas','Indulekha','kesu']

const shortNames=names.filter((name) =>{
    return name.length <= 8
})
console.log(shortNames)

const geocode=(address,callback) =>{

 setTimeout(() =>{
    const data={
        latitude:0,
        longitude:0
    }
    callback(data)
 },2000)


    
     
}

geocode('america',(data) =>{
    console.log(data)
})