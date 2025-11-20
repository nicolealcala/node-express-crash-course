// This file contains the callback functions (handlers) for evevry request to the blog resource

/**
 * MVC'S CONTROLLER
 *  ├── Acts ass a mediator/middleman between the Model and the View.
 *  ├── It's main purpose is to hande user input and update the system accordingly.
 *  └── It manages the flow of data between the Model and the Ciew abd responds
 *      to user actions, ensuring the application behaves correctly.
 * 
 */

const Blog = require('../models/blog')

function blogs_get(req, res) {
    Blog.find().sort({ createdAt: -1 })
        .then(result => res.render('index', { title: "All Blogs", blogs: result }))
        .catch(err => console.error(err))
}

function blog_create_get(req, res) {
    res.render('blogs/create', { title: "Create Blog" });
}

function blog_create_post(req, res) {
    const newBlog = new Blog(req.body)

    newBlog.save()
        .then(() => res.redirect('/blogs'))
        .catch(err => console.error(err));
}

function blog_details(req, res) {
    const id = req.params.id // --> the dynamic id value

    Blog.findById(id)
        .then(result => res.render('blogs/blog', { title: result.title, blog: result }))
        .catch(err => res.status(404).render('404', { title: "Not Found" }));
}

function blog_delete(req, res) {
    const id = req.params.id // --> dynamic id value

    Blog.findByIdAndDelete(id)
        .then((result) => res.json({ redirect: '/blogs' }))
        .catch(err => res.status(404).render('404', { title: "Not Found" }));
}

module.exports = {
    blogs_get,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
}