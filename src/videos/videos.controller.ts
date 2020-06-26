import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateBookDTO } from './dto/create-video.dto';

@Controller('books')
export class VideosController {
    constructor(private booksService: VideosService) { }

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }
}