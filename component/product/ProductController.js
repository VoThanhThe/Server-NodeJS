const productService = require('./ProductService');

const getAllProduct = async (page) => {
    try {
        //return await productService.getAllProducts();
        return await productService.getAllProducts(page);
    } catch (error) {
        throw error;
    }
}

const getProductsByCategory = async (categoryID) => {
    try {
        //return await productService.getAllProducts();
        return await productService.getProductsByCategory(categoryID);
    } catch (error) {
        throw error;
    }
}

const deleteProductByID = async (id) => {
    try {
        return await productService.deleteProductByID(id);
    } catch (error) {
        throw error;
    }
}

const updateProduct = async (id,name,price,quantity,image,category, sale) => {
    try {
        return await productService.updateProduct(id,name,price,quantity,image,category, sale);
    } catch (error) {
        console.log('Update product error',error);
    }
}

const getProductByID = async (id) => {
    try {
        return await productService.getProductByID(id);
    } catch (error) {
        console.log('get product by id error',error);
    }
}


const addNewProduct = async (name,price,quantity,image,category, sale) => {
    try {
        await productService.addNewProduct(name,price,quantity,image,category, sale);
    } catch (error) {
        console.log('get product by id error',error);
    }
}

const search = async (keyword, categoryId, sort) => {
    try {
        return await productService.search(keyword, categoryId, sort);
    } catch (error) {
        console.log('search product error',error);
    }
}

module.exports = {getAllProduct, deleteProductByID, addNewProduct, 
    updateProduct, getProductByID, search, getProductsByCategory};