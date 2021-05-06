import { Schema, models, model } from 'mongoose';

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			maxLength: 56
		},
		description: {
			type: String,
			required: true,
			unique: true
		},
		price: {
			type: Number,
			required: true
		},
		barcode: {
			type: String
			
		},
		images: {
			type: Array,
			default: []
		},
		reviews: {
			type: Number,
			max: 5,
			min: 1
		}
	},
	{
		timestamps: true
	}
);

const Product = models.Product || model('Product',productSchema)

export default Product