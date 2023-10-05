const db = require('../utils/db')

function get_all(page = 0,limit = 10) {
    return new Promise((resolve, reject) => {
        var offset = page * limit
        db.dbConn.query(`SELECT * FROM products LIMIT ? OFFSET ?;`,[limit,offset], (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
function get_product_category(id_category,page = 0,limit = 10) {
    return new Promise((resolve, reject) => {
        var offset = page * limit
        db.dbConn.query(`SELECT * FROM products WHERE id_category = ? LIMIT ? OFFSET ?;`,[id_category,limit,offset], (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
function get_product_slug(slug) {
    return new Promise((resolve, reject) => {
        db.dbConn.query(`SELECT * FROM products WHERE slug = ? LIMIT 1;`,[slug], (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
function get_product_id(insertId) {
    return new Promise((resolve, reject) => {
        db.dbConn.query(`SELECT * FROM products WHERE id = ? LIMIT 1;`,[insertId], (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
//admin 
function upload_product(name, slug, desciption, price, address, images, rate, id_category) {
    return new Promise((resolve, reject) => {
        db.dbConn.query("INSERT INTO `products` (`name`, `slug`, `desciption`, `price`, `address`, `images`, `rate`, `id_category`) VALUES (?,?,?,?,?,?,?,?)"
        ,[name, slug, desciption, price, address, images, rate, id_category], (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}
module.exports = {
    get_all,
    get_product_category,
    get_product_slug,
    get_product_id,
    upload_product
    
}