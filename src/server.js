import Express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './environments/environments.js'
import connectionDB from './config/connection.js';


class Server {

    constructor() {
        this.app = Express()
        this.port = env.PORT

        this.connectDB()
        this.middlewares()
        // this.routes()
    }

    async connectDB() {
        await connectionDB()
    }

    middlewares() {
        this.app.use( cors() )
        this.app.use( helmet() )
        this.app.use( morgan('dev') )
        this.app.use( Express.json() )
    }

    // routes() {}

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server corriendo en el puerto ${ this.port }`)
        })
    }
}

export default Server