const square=function(x) {
    return x*x;
}
const squareOf=(a) =>{
    return a*a;
}
console.log(squareOf(4))

const event ={
    name:'birthday party',
    guestList:['Saravanan','Mohandas','Nandini','Indulekha','Akhil'] ,                
    printGuestList() 
    {
        const that=this
        console.log('The Guestlist for '+this.name)
        that.guestList.forEach((guest) =>{
            console.log(guest+' is attending the '+that.name)
        })
     }
}
event.printGuestList()