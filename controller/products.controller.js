function getProducts(req, res) {
    // api logics
    res.json({ message: "All Products fetched successfully" });
};

function createProduct(req, res){
    // api logic -> should be create a data from user input
    res.json({message: "Product Added"});
};

function updateProduct(req, res){
    res.json({message: "Product Updated"});
};

function deleteProduct(req, res){
    res.json({message: "Product Deleted"});
};

// exports default
module.exports = {getProducts, createProduct, updateProduct, deleteProduct};


// The Best Clean Code Method:

// exports.getProducts = (req, res) => {
//     res.json({ message: "All Products fetched" });
// };

// exports.createProduct = (req, res) => {
//     res.json({ message: "Product Added" });
// };

// exports.updateProduct(req, res){
//     res.json({message: "Product Updated"});
// };

// exports.deleteProduct(req, res){
//     res.json({message: "Product Deleted"});
// };