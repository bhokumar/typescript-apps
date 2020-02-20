import {Request, Response, NextFunction} from 'express';
import {get, controller, use, post} from './decorators';

function logger(request: Request, response: Response, next: NextFunction) {
    console.log('Request was made!');
    next();
}

@controller('/auth')
export class LoginController {
    @get('/login')
    @use(logger)
    getLogin(request: Request, response: Response) {
        response.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name= "email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name= "password"  type="password"/>
                </div>
                <button>Submit</button>
            </form>
        `);
    }

    @post('/login')
    postLogin(request: Request, response: Response) {
        const {email, password} = request.body;

        if (email === 'hi@hi.com' && password === 'password') {
            request.session = {loggedIn: true};
            response.redirect('/');
        } else {
            response.send('Invalid Email or Password!');
        }

    }

}

