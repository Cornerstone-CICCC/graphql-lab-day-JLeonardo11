import { Order } from "../models/order.model";
import {IOrder} from '../types/order'

const getOrders = async () =>{
    return await Order.find()
};

const createOrder = async (data: Omit<IOrder, 'id'>) => {
    const order = new Order(data)
    return await order.save()
}

  
  // Update customer order
  const updateOrder = async (
    id: string,
    data: Partial<IOrder>
  ) => {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  };
  
  // Delete customer order
  const deleteOrder = async (id: string) => {
    return await Order.findByIdAndDelete(id);
  };
  
  export default {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
  };