import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
export class UpdateBookDto extends PartialType(CreateBookDto) {
    bookid: number;
    bookname: string;
    bookauthor: string;
    bookprice: number;
    // book_image: string;
    // book_isbn: string;
}