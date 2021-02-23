import { NextFunction, Request, Response } from 'express';

export interface ExpressHttp {
	res: Response;
	req?: Request;
	next?: NextFunction | undefined;
}
