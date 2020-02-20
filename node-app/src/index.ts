import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import loginRouter from './routes/loginRoutes';
import {AppRouter} from './AppRouter';
import './controllers/LoginController';

const PORT = process.env.PORT || 3000;


class Server {
    app: express.Express = express();

    constructor() {
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieSession({keys: ['absbj']}));
        this.app.use(AppRouter.getInstance());
        this.app.use(loginRouter);
    }

    start() {
        this.app.listen(PORT, () => {
            console.log(`App started on port ${PORT}`);
        });
    }
}

const server = new Server();
server.start();