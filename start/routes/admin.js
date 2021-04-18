'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // categories resources routes
  Route.resource('categories', 'CategoryController').apiOnly()

  // Products resources routes
  Route.resource('products', 'ProductController').apiOnly()

  // Coupon resources routes
  Route.resource('coupons', 'CouponController').apiOnly()

  // Orders resources routes
  Route.resource('orders', 'OrderController').apiOnly()

  // Îmages resources routes
  Route.resource('images', 'ImagesController').apiOnly()

  // User resource routes
  Route.resource('users', 'UserController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')
