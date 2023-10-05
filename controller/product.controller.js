const request = require("../utils/request");
const Product = require("../model/product");
let debug = true;
exports.get_product = async (req, res) => {
 
  try {
    const { data,type } = req.body;
    let result = null
    if(type == "id"){
        result = await Product.get_product_id(data)
    }
    if(type == "slug"){
        result = await Product.get_product_slug(data)
    }
    if(type == "category"){
        result = await Product.get_product_category(data)
    }
    res.send({
      status: true,
      data: result,
    });
  } catch (error) {
    if (debug) {
      res.send({
        status: false,
        user: null,
        error: error,
      });
    } else {
      res.send({
        status: false,
        user: null,
      });
    }
  }
};
exports.upload_product = async (req, res) => {
  const { name, slug, desciption, price, address, images, rate, id_category } =
    req.body;
  var result = await Product.upload_product(
    name,
    slug,
    desciption,
    price,
    address,
    images,
    rate,
    id_category
  );
  res.send({
    status: true,
    data: result,
  });
  try {
  } catch (error) {
    if (debug) {
      res.send({
        status: false,
        user: null,
        error: error,
      });
    } else {
      res.send({
        status: false,
        user: null,
      });
    }
  }
};
