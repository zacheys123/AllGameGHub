import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRoutes from './routes/user.js';
import userActions from './routes/user_actions.js';
import quickMatch from './routes/quickgame.js';
import standings from './routes/fetch_Standings.js';
import fixtures from './routes/fetchFixtures.js';
import path from 'path';

dotenv.config();
const source = process.env.MONGO_URI;
const app = express();
app.use(function (req, res, next) {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'http://localhost:3000',
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, DELETE, PUT',
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(morgan('dev'));

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/users', userRoutes);

app.use('/', standings);
app.use('/', fixtures);
app.use('/game', quickMatch);
app.use('/user/v2', userActions);

// Serve Static if in prod
//  if (process.env.NODE_ENV !== 'production') {
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
// }
const PORT = process.env.PORT || 3500;

mongoose.set('strictQuery', true);
mongoose
	.connect(source)
	.then(() =>
		app.listen(PORT, () => console.log(`running on port ${PORT}`)),
	)
	.catch((error) => console.log(error.message));

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message));
db.once('open', () => console.log('Mongoose is connected'));
