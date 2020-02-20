import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/login', (request: Request, response: Response) => {
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
})

router.get('/', (request: Request, response: Response) => {
    response.send(`
        <div>
            You are successfully logged in!
        </div>
    `);
})

export default router;