class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts(){
        return this.products
    }


    addProduct({title, desc, price, thumbnail, code, stock}){

        const findedProduct = this.products.find((product) => product.title == title || product.code == code)

        if(findedProduct){
            console.log("Error ya existe un producto con ese titulo o codigo ${title} - ${code} ")
        }else{
        const id = this.products.length + 1
        this.products.push({title, desc, price, thumbnail, code, stock})
        }
    }

    getProductById(id){
        const findedProduct = this.products.find((product) => product.id == id)
        if(findedProduct){
            console.log("Producto encontrado \n" + JSON.stringify(findedProduct))
        }else{
            console.log("No se encuentra un producto con ese id")
        }
    }
}

const productManager = new ProductManager

// -- operaciones //
const newProduct1 = {
    title:"P1" ,
    desc: "D1" ,
    price: "J1" ,
    thumbnail: "T1" ,
    code: "C1" ,
    stock: "S1"
}
const newProduct2 = {
    title:"P2" ,
    desc: "D2" ,
    price: "J2" ,
    thumbnail: "T2" ,
    code: "C2" ,
    stock: "S2"
}
productManager.addProduct(newProduct1)
productManager.addProduct(newProduct2)

console.log(productManager.getProducts(1))