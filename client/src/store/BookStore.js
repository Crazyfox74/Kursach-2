import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._authors =[]
        this._geners =[]
        this._types =[]

        this._ratings=[]
        this._languages=[]
        this._ages=[]
        this._publishers =[]
        this._books =[]
        this._selectedBook={}
        this._selectedRating={}
        this._selectedLanguage={}
        this._selectedAge={}
        this._selectedAuthor ={}
        this._selectedGener ={}
        this._selectedType ={}
        this._selectedPublisher={}
        makeAutoObservable(this)
    }


    setRatings(ratings){
        this._ratings=ratings
    }
    setLanguages(languages){
        this._languages=languages
    }

    setAges(ages) {
        this._ages=ages
    }

    setAuthors(authors) {
        this._authors = authors
    }
    setGeners(geners) {
        this._geners = geners
    }

    setTypes(types) {
        this._types = types
    }

    setPublishers(publishers) {
        this._publishers = publishers
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedRating(rating){
        this._selectedRating=rating
    }
    setSelectedLanguage(language){
        this._selectedLanguage=language
    }

    setSelectedAge(age){
        this._selectedAge=age
    }

    setSelectedAuthor(author){
        this._selectedAuthor = author
    }
    setSelectedGener(gener){
        this._selectedGener = gener
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedPublisher(publisher){
        this._selectedPublisher = publisher
    }

    setSelectedBook(book){
        this._selectedBook = book
    }
    get ratings(){
        return this._ratings
    }
    get languages(){
        return this._languages
    }

    get ages(){
        return this._ages
    }

    get authors() {
        return this._authors
    }
    get geners() {
        return this._geners
    }

    get types() {
        return this._types
    }
    get publishers() {
        return this._publishers
    }
    get books() {
        return this._books
    }

    get selectedBook() {
        return this._selectedBook
    }
    get selectedRating(){
        return this._selectedRating
    }

    get selectedLanguage(){
        return this._selectedLanguage
    }

    get selectedAge(){
        return this._selectedAge
    }


    get selectedAuthor() {
        return this._selectedAuthor
    }
    get selectedGener() {
        return this._selectedGener
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedPublisher() {
        return this._selectedPublisher
    }
}