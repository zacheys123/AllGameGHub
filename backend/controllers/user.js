import UserSchema from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { response } from 'express';
export const register = async (req, res) => {
	const { email, password, firstname, lastname } = req.body;

	if (!email || !password || !firstname || !lastname)
		return res.status(400).json({
			success: false,
			message: 'Password and email are required',
		});

	if (password.length < 8) {
		return res.status(400).json({
			success: false,
			message: 'Password should be at least 8 characters long',
		});
	}

	const user = await UserSchema.findOne({ email }); // finding user in db
	if (user)
		return res.status(400).json({
			message: 'Email already in use',
		});

	const newUser = new UserSchema({
		email,
		password,
		username: `${firstname}${lastname}`,
		games: [],
	});
	// hasing the password

	const savedUserRes = await newUser.save();

	if (savedUserRes) {
		const token = jwt.sign(
			{ email: savedUserRes.email, id: savedUserRes._id },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRE },
		);
		return res.status(200).json({
			message: 'User  successfully saved',
			result: savedUserRes,
			token,
		});
	}
};
export const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(500).json({ message: 'Something missing' });
	}

	const result = await UserSchema.findOne({ email: email }); // finding user in db
	if (!result) {
		return res
			.status(400)
			.json({ success: false, message: 'User not found' });
	}

	// comparing the password with the saved hash-password
	const matchPassword = await bcrypt.compare(
		password,
		result.password,
	);
	if (matchPassword) {
		return jwt.sign(
			{ email: result.email, id: result._id },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRE },
			(err, token) => {
				res.status(200).json({
					success: true,
					message: 'You have logged in successfully',
					result,
					token,
				});
			},
		);
	} else {
		return res
			.status(400)
			.json({ success: false, message: 'Invalid credential' });
	}
};

export const forgotpassword = async (req, res) => {
	res.send('hello forgot ');
};
export const resetpassword = async (res, req) => {
	res.send('hello reset ');
};
export const googleSignin = async (req, res) => {
	const { email, username, jti } = req.body;

	try {
		const user = await UserSchema.findOne({
			email,
		});
		if (user) {
			const result = { id: user._id.toString(), email, username };
			return res.status(200).json({
				mainsuccess: true,
				message: 'user exists',
				result,
				jti,
			});
		}
		const result = await UserSchema.create({
			email,
			username,
			jti,
		});
		res.status(200).json({ success: true, result, jti });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
		console.log(error.message);
	}
};
export const users = async () => {
	try {
		const users = await UserSchema.find();
		res.status(200).json({ success: true, result: users });
	} catch (error) {
		res.status(500).json(error.message);
	}
};
