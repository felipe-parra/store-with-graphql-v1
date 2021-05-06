import { Schema, models, model } from 'mongoose';

const messageSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		content: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Message = models.Message || model('Message', messageSchema);

export default Message;
