import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { BooksService } from "./book.service";

@Controller('products')
export class BooksController {
    constructor(private productService: BooksService) { }

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('author') prodAuthor: string,
        @Body('price') prodPrice: number
    ) {
        const generatedId = this.productService.insertProduct(prodTitle, prodAuthor, prodPrice);
        return { id: generatedId };
    }
    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string,) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('author') prodAuthor: string,
        @Body('price') prodPrice: number
    ) {
        this.productService.updateProduct(prodId, prodTitle, prodAuthor, prodPrice);
        return null;
    }
    @Delete(':id')
    removeProduct(@Param('id') prodId: string,) {
        this.productService.deleteProduct(prodId);
        return null;
    }
} 