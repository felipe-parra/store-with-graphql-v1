import Message from "../../models/Message";
import Product from "../../models/Product";

const Mutation = {
  createMessage: async (_, { title, content, author }) => {
    const newMessage = new Message({ title, content, author });
    return await newMessage.save();
  },
  createProduct: async (
    _,
    { name, description, price, barcode, images, reviews,  createdAt,
      updatedAt,}
  ) => {
    const newProduct = new Product({
      name,
      description,
      price,
      barcode,
      images,
      reviews,
      createdAt,
      updatedAt,
    });
    return await newProduct.save();
  },
};

export default Mutation;
