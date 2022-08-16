import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { BooksService } from "./book.service";

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('author') prodAuthor: string,
        @Body('price') prodPrice: number,
    ) {
        const generatedId = this.bookService.insertProduct(prodTitle, prodAuthor, prodPrice);
        return { id: generatedId };
    }
    @Get()
    getAllProducts() {
        return this.bookService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string,) {
        return this.bookService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('author') prodAuthor: string,
        @Body('price') prodPrice: number
    ) {
        this.bookService.updateProduct(prodId, prodTitle, prodAuthor, prodPrice);
        return null;
    }
    @Delete(':id')
    removeProduct(@Param('id') prodId: string,) {
        this.bookService.deleteProduct(prodId);
        return null;
    }
} 