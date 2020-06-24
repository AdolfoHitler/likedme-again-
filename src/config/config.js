// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 4000;
// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ============================
//  Base de datos
// ============================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/likedme';
}else{
    urlDB = 'mongodb+srv://roberto:YYvkvqPBQFCOXz3k@cluster0-2wmdy.mongodb.net/likedme?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;