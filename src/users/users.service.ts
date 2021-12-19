import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'John Marston',
            password: 'rdr1',
        },
        {
            userId: 2,
            username: 'Arthur Morgan',
            password: 'rdr2',
        },
    ]

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
