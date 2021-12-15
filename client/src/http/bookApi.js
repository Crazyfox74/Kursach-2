import {$authHost,$host} from "./index";
import jwt_decode from "jwt-decode"

export const createRating = async (rating) => {
    const {data} = await $authHost.post('api/ratings', rating)
    return data
}
   
export const deleteRating = async (id) => {
       const {data} = await $authHost.delete('api/ratings/'+ id)
       return data
} 
   
export const fetchRatings = async () => {
       const {data} = await $host.get('api/ratings')
       return data
}

export const createAge = async (age) => {
    const {data} = await $authHost.post('api/ages', age)
    return data
}
   
export const deleteAge = async (id) => {
       const {data} = await $authHost.delete('api/ages/'+ id)
       return data
} 
   
export const fetchAges = async () => {
       const {data} = await $host.get('api/ages')
       return data
}

export const createLanguage = async (language) => {
    const {data} = await $authHost.post('api/language', language)
    return data
}
   
export const deleteLanguage = async (id) => {
       const {data} = await $authHost.delete('api/language/'+ id)
       return data
} 
   
export const fetchLanguages = async () => {
       const {data} = await $host.get('api/language')
       return data
}

export const createType = async (type) => {
 const {data} = await $authHost.post('api/type', type)
 return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost.delete('api/type/'+ id)
    return data
} 

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
   }

export const createGenre = async (gener) => {
    const {data} = await $authHost.post('api/genre', gener)
    return data
   }
   
   export const deleteGenre = async (id) => {
    const {data} = await $authHost.delete('api/genre/'+ id)
    return data
} 

export const fetchGenre = async () => {
       const {data} = await $host.get('api/genre')
       return data
}

export const createPublisher = async (publisher) => {
        const {data} = await $authHost.post('api/publisher', publisher)
        return data
}

export const deletePublisher = async (id) => {
        const {data} = await $authHost.delete('api/publisher/'+ id)
        return data
} 

export const fetchPublisher = async () => {
           const {data} = await $host.get('api/publisher')
           return data
}

export const createAuthor = async (author) => {
    const {data} = await $authHost.post('api/author',author)
    return data
}

export const deleteAuthor = async (id) => {
    const {data} = await $authHost.delete('api/author/'+ id)
    return data
} 

export const fetchAuthor = async () => {
       const {data} = await $host.get('api/author')
       return data
}

export const createBook = async (book) => {
    const {data} = await $authHost.post('api/book', book)
    return data
}
   
export const fetchBooks = async () => {
       const {data} = await $host.get('api/book')
       return data
}

export const fetchOneBook = async (id) => {
    const {data} = await $host.get('api/book/'+id)
    return data
}

export const deleteBook = async (id) => {
    const {data} = await $authHost.delete('api/book/'+ id)
    return data
} 