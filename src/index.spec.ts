import { helloWorld } from './index';
import expressRequestMock from 'express-request-mock'; // https://github.com/i-like-robots/express-request-mock

test('index returns 200 and Hello World!', async () => {
    const { res } = await expressRequestMock(helloWorld);
    
    expect(res.statusCode).toEqual(200);
    expect(res._getData()).toBe('Go Hogs, beat Aggies!!');
});