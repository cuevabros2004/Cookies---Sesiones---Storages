import session from 'express-session'
import MongoStore from 'connect-mongo'

//session
export default function login(servidor) {

    servidor.use(session({
        /* ----------------------------------------------------- */
        /*           Persistencia por redis database             */
        /* ----------------------------------------------------- */
        store: MongoStore.create({
            //En Atlas connect App :  Make sure to change the node version to 2.2.12:
            mongoUrl: `mongodb+srv://root:12345@cluster0.mqhwyzp.mongodb.net/test`,
        }),
        /* ----------------------------------------------------- */

        secret: 'shhhhhhhhhhhhhhhhhhhhh',
        resave: false,
        saveUninitialized: false/* ,
    cookie: {
        maxAge: 40000
    } */
    }))

}