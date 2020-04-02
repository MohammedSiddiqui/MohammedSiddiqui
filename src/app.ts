import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

// create and setup express app
const app = express();
app.use(bodyParser.json());

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    const userRepo = connection.getRepository(User);

    app.get("/users", async function(req: Request, res: Response) {
        const result = await userRepo.find();
        res.send(result);
    });

    app.get("/user", async function(req: Request, res: Response) {
        const result = await userRepo.createQueryBuilder('user')
            .select(['user'])
            .where({
                firstName: 'Foo'
            })
            .getOne();
        // result.lolFunc();
        res.send(result);
    });

    app.get("/save", async function(req: Request, res: Response) {
        let newUser = new User();
        newUser.firstName = 'Foo';
        newUser.lastName = 'Bar';
        newUser.age = 26;

        const result = await userRepo.save(newUser);

        res.send(result);
    });

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));
