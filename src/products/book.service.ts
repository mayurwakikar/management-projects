import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from "./book.model";

@Injectable()
export class BooksService {
    private products: Product[] = [];
    // constructor((BookEntity)
    // private readonly bookRepository: Repository<BookEntity>) { }

    insertProduct(title: string, author: string, price: number) {
        const prodId = Math.random().toString();       //new Date().toString(); instead of this we used Math.random
        const newProduct = new Product(prodId, title, author, price);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }
    updateProduct(productId: string, title: string, author: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ...product };
        if (title) {
            updatedProduct.title = title;
        }
        if (author) {
            updatedProduct.author = author;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }
    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findProduct(id: String): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Sorry Could Not Find a Product');
        }
        return [product, productIndex];
    }

}