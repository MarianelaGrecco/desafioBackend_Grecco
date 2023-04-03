class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        if (this.products.find(producto => producto.code == product.code)) {
            return "Producto"
        } else {
            this.products.push(product)
           
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(producto => producto.id == id)

        if (product) { 
            return product
        }

        return "Not Found"
    }


}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }

    static incrementID() {
        if (this.idIncrement) { 
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Manzanas", "Manzana roja por hilo", 250, "", "M111", 5)
const product2 = new Product("Naranjas", "Naranja jugo por kilo", 450, "", "N222", 30)
const product3 = new Product("Pera", "Pera dulce por kilo", 580, "", "P333", 20)
const product5 = new Product()




