interface IBook {
    id: number;
    title: string;
    description: string;
    authorId: number;
}

interface IAuthor {
    id: number;
    name: string;
}

interface IBookService {
    books: IBook[],
    authors: IAuthor[],

    getBookById(id: number): IBook | undefined;
    getBooksByAuthor(authorId: number): IBook[];
    getAuthorById(id: number): IAuthor | undefined;
}

const bookService: IBookService = {
    books: [],
    authors: [],

    getBookById(id: number): IBook | undefined {
        return this.books.find(book => book.id === id)
    },

    getBooksByAuthor(authorId: number): IBook[] {
        return this.books.filter(book => book.authorId === authorId)
    },

    getAuthorById(id: number): IAuthor | undefined {
        return this.authors.find(author => author.id === id)
    }
};