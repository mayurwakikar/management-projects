import { Module } from "@nestjs/common";
import { BooksController } from "./book.controller";
import { BooksService } from "./book.service";
//import { ProductsController } from "./book.controller";
//import { ProductsService } from "./book.service";

@Module({
    // imports: [ProductsModule],
    controllers: [BooksController],
    providers: [BooksService],
})

export class BooksModule { }