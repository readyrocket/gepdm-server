import { Request } from 'express';

export interface ITokenUserAuthRequest extends Request {
	token: string;
}
