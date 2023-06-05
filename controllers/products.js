const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  // const product = new Product(req.body.title);
  // product.save().then(() => {
  //   res.redirect('/');
  // }).catch((err) =>{
  //   console.log(err);
  // });
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(null, title, imageUrl, description, price);

  product.save()
    .then(() => {
      console.log('Product added successfully');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      // Handle the error appropriately
    });
  
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }).catch((err)=> {
    console.log(err);
  });
};
