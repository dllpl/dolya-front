import axios from 'axios';

import type { Response } from '@/interfaces/response';

interface User {
	name: string;
	active: boolean;
	last_active: Date;
	created_at: Date;
}

/* Get user */
interface GetUserResponse extends Response {
	data: {
		user: User;
	};
}

export async function getUser(): Promise<GetUserResponse> {
	return axios.get('/user/show').then((response) => response.data);
}

/* Create user */

export interface CreateUserInput {
	name: string;
}

interface CreateUserResponse extends Response {
	data: {
		token: 'string';
		user: User;
	};
}

export async function createUser(data: CreateUserInput): Promise<CreateUserResponse> {
	return axios.post('/user/create', data).then((response) => response.data);
}

/* Update user */

export type UpdateUserInput = CreateUserInput;

type UpdateUserResponse = GetUserResponse;

export async function updateUser(data: UpdateUserInput): Promise<UpdateUserResponse> {
	return axios.post('/user/update', data).then((response) => response.data);
}
