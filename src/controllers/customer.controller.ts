import {Customer} from '../models/customer.model'
import {ICustomer} from '../types/customer'




// Get all customers
const getCustomers = async () => {
  const users = await Customer.find()
  return users
}

// Create customer
const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
    console.log('Creating customer with data:', data); // 👈 Add this

  const customer = new Customer(data);
  return await customer.save()
}

// Find customer by id
const findCustomer = async (id: string) => {
  return await Customer.findById(id)
}

// Update user
const updateCustomer = async (id: string, data: Partial<{firstName: string, lastName:string, email:string}>) => {
  return await Customer.findByIdAndUpdate(id, data, { new: true })
}

// Delete user
const deleteCustomer = async (id: string) => {
  return await Customer.findByIdAndDelete(id)
}

export default {
  getCustomers,
  createCustomer,
  findCustomer,
  updateCustomer,
  deleteCustomer
}