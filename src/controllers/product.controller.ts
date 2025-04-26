import {Product} from '../models/product.model'; // Ensure correct path and case
import {IProduct} from '../types/product'
// Get all products
const getProduct = async () => {
  return await Product.find();
};

// Create product
const createProduct = async (data: Omit<IProduct, 'id'>) => {
  const customer = new Product(data);
  return await customer.save();
};

// Find Product by ID
const findProduct = async (id: string) => {
  return await Product.findById(id);
};

// Update product
const updateProduct = async (
  id: string,
  data: Partial<IProduct>
) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

// Delete product
const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  getProduct,
  createProduct,
  findProduct,
  updateProduct,
  deleteProduct,
};
