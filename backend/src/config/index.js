import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DATABASE_PORT)
const config = {
	DB: {
		URI: `mongodb://localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
		URI_PROD: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env
			.DATABASE_PASSWORD}@pmxcluster.lo8p7.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
		USER: process.env.DATABASE_USERNAME,
		NAME: process.env.DATABASE_NAME,
		PASSWORD: process.env.DATABASE_PASSWORD,
		HOST: process.env.DATABASE_HOST,
		PORT: process.env.DATABASE_PORT
	},
	apiKey: String(process.env.API_KEY),
	authDomain: String(process.env.AUTH_DOMAIN),
	projectId: String(process.env.PROJECT_ID),
	storageBucket: String(process.env.STORAGE_BUCKET),
	messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
	appId: String(process.env.APP_ID),
	databaseURL: String(process.env.DATABASE_URL),
	secretKey: String(process.env.SECRET_KEY),
};

export default config;
