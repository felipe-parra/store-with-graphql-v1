import Message from '../../models/Message'
import Product from '../../models/Product'

const Query = {
  ping(){
    return 'pong!'
  },
  messages: async () => {
    return await Message.find()
  },
  products: async () => {
    return await Product.find()
  }
}

export default Query