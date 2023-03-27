import { PostModel } from "@/model";
import BaseController from "./base";

class PostController extends BaseController {
  constructor() {
    super();
  }

  async createPost() {
    const newPost = JSON.parse(this.request.body);
    const post = await PostModel.create(newPost);
    this.response.success(post);
  }

  async getAllPosts() {
    const posts = await PostModel.find({});
    this.response.success(posts);
  }

  async getPostById() {
    const post = await PostModel.findById(this.request.id);
    if (post) {
      this.response.success(post);
    } else {
      this.response.error("無此貼文 id");
    }
  }

  async updatePost() {
    const update = JSON.parse(this.request.body);
    const updatedPost = await PostModel.findByIdAndUpdate(
      this.request.id,
      update,
      {
        new: true,
      }
    );
    if (updatedPost) {
      this.response.success(updatedPost);
    } else {
      this.response.error("無此貼文 id");
    }
  }

  async deletePost() {
    const deletedPost = await PostModel.findByIdAndDelete(this.request.id);
    if (deletedPost) {
      this.response.success("刪除成功");
    } else {
      this.response.error("無此貼文 id");
    }
  }
}

export default new PostController();
