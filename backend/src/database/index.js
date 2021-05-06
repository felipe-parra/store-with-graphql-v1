import mongoose from 'mongoose';
import config from '../config';

mongoose
	.connect(config.DB.URI, {
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then((db) => console.log('Database is connect to: ', db.connections[0].name))
	.catch((err) => console.log(err));
