import { Controller, Post, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service'
import { UserRole } from './schema/users.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    @Post('register')
    async registerUser(@Body() body: { name: string; email: string; password: string; role: UserRole }) {
        return this.userService.register(body)
    }
    @Post('login')
    async loginUser(@Body() body: { email: string, password: string }) {
        return this.userService.loginUser(body)
    }
    @Put('updateprofile')
    async updateUser(
        @Body()
        body: {
            userId: string;
            name?: string;
            email?: string;
            companyName?: string;
            description?: string;
        }
    ) {
        return this.userService.updateUser(body);
    }
}
