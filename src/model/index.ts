import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  content: string;
  image: string;
  createdAt: Date;
  name: string;
  likes: number;
}

const postSchema = new Schema<IPost>({
  content: {
    type: String,
    required: [true, "Content 未填寫"],
  },
  image: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
  name: {
    type: String,
    required: [true, "貼文姓名未填寫"],
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model<IPost>("Post", postSchema);

export { PostModel };
