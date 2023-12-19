"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
//import modules
const post_service_1 = require("../Services/post.service");
const posts_1 = require("../Models/posts");
class postController {
    constructor() {
        //add post controller
        this.addpost = async (req, res) => {
            //data to be saved in database
            const data = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                published: req.body.published
            };
            //validating the request
            const { error, value } = posts_1.PostschemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                //call the create post function in the service and pass the data from the request
                const post = await post_service_1.postServices.createPost(value);
                res.status(201).send(post);
            }
        };
        //get all posts
        this.getPosts = async (req, res) => {
            const posts = await post_service_1.postServices.getPosts();
            res.send(posts);
        };
        //get a single post
        this.getAPost = async (req, res) => {
            //get id from the parameter
            const id = req.params.id;
            const post = await post_service_1.postServices.getPost(id);
            res.send(post);
        };
        //update post
        this.updatePost = async (req, res) => {
            const id = req.params.id;
            const post = await post_service_1.postServices.updatePost(id, req.body);
            res.send(post);
        };
        //delete a post
        this.deletePost = async (req, res) => {
            const id = req.params.id;
            await post_service_1.postServices.deletePost(id);
            res.send('post deleted');
        };
    }
}
//export class
exports.PostController = new postController();
//# sourceMappingURL=post.controller.js.map