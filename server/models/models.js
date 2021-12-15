const sequalize = require('../db')
const {DataTypes} =require('sequelize')

const User = sequalize.define( 'user',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    email:{type: DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role: {type:DataTypes.STRING,defaultValue:"USER"},
})

const Basket = sequalize.define( 'basket',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    
})


const BookBasket=sequalize.define( 'BookBasket',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    
})

const Book=sequalize.define( 'Book',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.DECIMAL,defaultValue:0},
    img:{type: DataTypes.STRING, allowNull:false},
    ratingId:{type: DataTypes.INTEGER, allowNull:false}
})

const Genre=sequalize.define( 'genre',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Type=sequalize.define( 'type',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Author=sequalize.define( 'author',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    Author_Name:{type: DataTypes.STRING, unique:true, allowNull:false},
    Author_Surname:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Publisher=sequalize.define( 'publisher',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Rating=sequalize.define('rating',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    rating_value:{type: DataTypes.INTEGER, defaultValue:0},
})

const Language=sequalize.define( 'language',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

const Ages=sequalize.define( 'ages',{
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Rating.hasMany(Book)
Book.belongsTo(Rating)


Publisher.hasMany(Book)
Book.belongsTo(Publisher)

Type.hasMany(Book)
Book.belongsTo(Type)

Ages.hasMany(Book)
Book.belongsTo(Ages)

Language.hasMany(Book)
Book.belongsTo(Language)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Author.hasMany(Book)
Book.belongsTo(Author)

Basket.hasMany(BookBasket)
BookBasket.belongsTo(Basket)

Book.hasMany(BookBasket)
BookBasket.belongsTo(Book)



module.exports={
    User,
    Basket,
    Book,
    BookBasket,
    Type,
    Genre,
    Publisher,
    Author,
    Ages,
    Language,
    Rating
}