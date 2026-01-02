import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { jwtConfig } from '../util/jwt.config';
import { User, UserDocument, UserRole } from './schema/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) { }

    // Generate JWT token
    generateToken(id: string) {
        return jwt.sign(
            { id },
            jwtConfig.secret,
            jwtConfig.signOptions
        );
    }

    // Register user
    async register(body: {
        name: string;
        email: string;
        password: string;
        role: UserRole;
    }) {
        // 1️⃣ Check if user already exists
        const existingUser = await this.userModel.findOne({ email: body.email });
        if (existingUser) {
            throw new BadRequestException('User with this email already exists');
        }

        // 2️⃣ Hash password
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // 3️⃣ Create new user
        const newUser = new this.userModel({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            role: body.role,
        });

        await newUser.save();

        // 4️⃣ Generate JWT
        const token = this.generateToken(newUser._id.toString());

        // 5️⃣ Return user info without password
        return {
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
        };
    }

    //Login user
    async loginUser(body: {
        email: string,
        password: string
    }) {
        const checkUser = await this.userModel.findOne({ email: body.email });
        if (!checkUser) {
            return {
                success: false,
                status: 404,
                message: 'User not found'
            }
        }
        const verifyPassword = await bcrypt.compare(body.password, checkUser.password);
        if (!verifyPassword) {
            return {
                success: false,
                status: 400,
                message: 'password is wrong'
            }
        }

        const token = this.generateToken(checkUser._id.toString());

        // 4️⃣ Return user data without password
        return {
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: checkUser._id,
                name: checkUser.name,
                email: checkUser.email,
                role: checkUser.role,
            },
        };
    }

    //Update user
    async updateUser(body: {
        userId: string,
        name?: string,
        email?: string,
        companyName?: string,
        description?: string
    }) {
        const findUser = await this.userModel.findById(body.userId).exec()
        if (!findUser) {
            return {
                success: false,
                status: 404,
                message: 'User not found'
            }
        }
        findUser.name = body.name ?? findUser.name;
        findUser.email = body.email ?? findUser.email;
        if (findUser.role === 'employer') {
            findUser.companyName = body.companyName ?? findUser.companyName;
            findUser.description = body.description ?? findUser.description;
        }
        await findUser.save();
        return {
            success: true,
            message: 'User Updated Successfully',
            user: findUser
        }
    }
}

