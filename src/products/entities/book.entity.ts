import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bookdetails')
export class BookEntity {
    @PrimaryGeneratedColumn()
    bookid: number;
    @Column({ default: '' })
    bookname: string;
    @Column()
    bookauthor: string;
    @Column()
    bookprice: number;
    // @Column()
    // book_image: string;
    // @Column()
    // book_isbn: string;
}