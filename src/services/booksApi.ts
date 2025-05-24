import axios, { AxiosInstance } from "axios";

class BooksApi {
    private url: string;
    private api: AxiosInstance;

    constructor() {
        this.url = 'https://www.googleapis.com/books/v1/volumes';
        this.api = axios.create({
            baseURL: this.url
        });
    }

    async getBooks(query: string = "harry potter") {
        const response = await this.api.get(`?q=${encodeURIComponent(query)}`);
        return response.data.items;
    }
}

export default BooksApi;