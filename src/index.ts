/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
import { Request, Response } from 'express';

export const helloWorld = (_: Request, res: Response) => {
    res.status(200).send('Hello World!');
}