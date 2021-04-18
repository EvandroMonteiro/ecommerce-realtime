'use strict'

const Product = use('App/Models/Product')
const OrderItemHook = exports = module.exports = {}

OrderItemHook.updateSubtotal = async (model) => {
  const product = await Product.find(model.product_id)
  model.subtotal = model.quantity * product.price
}
