import axios from 'axios'


export class PixabyFetch {
    constructor() {
        this._searchQuery = '';
        this._page = 1
    }

    get searchQuery() {
    return this._searchQuery;
    }
    set searchQuery(value) {
        return this._searchQuery = value
    }

    get page() {
    return this._page;
    }
    set page(value) {
        return this._page += value
    }
    resetPage() {
        return (this._page = 1)
    }
    async searchPhotos() {

        let url = `https://pixabay.com/api/?key=23260269-a14f68c41e91863ff9df952e6&q=${this.searchQuery}&page=${this.page}&per_page=12`
        try{
        const result =  await axios.get(url)
        const data = result.data.hits
        return data
        } catch (error) {
            return error
        }
    }
}