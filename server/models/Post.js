import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
	{
		title: { type: String },
		body: { type: String },
		authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }		
	}, 
	{ timestamps: true }
)

export const Post = mongoose.model('Post', PostSchema)