//This file contains all the /blog routes.

const express = require('express');
const blogController = require('../controllers/blogController')

/**
 * EXPRESS ROUTER
 *  ├── Facilitates the creation of modular, mountable route handlers.
 *  ├── Acts as a "mini-app" or a complete middleware and routing system,
 *  │   allowing us to organize routes into separate files and apply
 *  │   middleware to specific groups of routes.
 *  └── To use the router, we simply pass it to the express app as a middleware
 *      using `app.use()` 
 * 
 */

const router = express.Router();

router.get('/', blogController.blogs_get)
router.post('/', blogController.blog_create_post)
router.get('/create', blogController.blog_create_get)

/**
 * ROUTE PARAMETERS
 *  ├── The varable parts of the route that may change value.
 *  ├── localhost:3000/:id
 *  └── localhost:3000/123 || localhost:3000/hello
 * 
 */

router.get("/:id", blogController.blog_details)
router.delete('/:id', blogController.blog_delete)

module.exports = router;