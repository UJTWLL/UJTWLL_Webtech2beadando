import { UserDTO } from './user';

export interface User {
    username: string;
    password: string;
}

export function toUser(userDTO: UserDTO): User {
    return {
        username: userDTO.username,
        password: userDTO.password,
    };
}
