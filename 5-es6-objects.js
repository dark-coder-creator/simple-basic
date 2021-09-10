


const location=['Kolazhy','kumily']
 const product={
     label:'Red notebook',
     price:3,
     stock:201,
     salePrice:43
 }

 const { label,price,stock,salePrice }=product 
 console.log(`The Label of Product:${label}`)
 console.log(`The Price of Product:${price}`)
 console.log(`The Stock of Product:${stock}`)
 console.log(`The SalesPrice of Product:${salePrice}`)


const transaction=(type,{label,stock=0}={}) =>{
      console.log(type,label,stock)
}

 transaction('order',product)
