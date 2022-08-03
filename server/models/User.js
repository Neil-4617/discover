import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		firstname: { type: String },
		lastname: { type: String },
		email: { type: String }
	}, { timestamps: true }
)

export const User = mongoose.model('User', UserSchema)