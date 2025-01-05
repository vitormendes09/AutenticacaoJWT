import {Router} from 'express';


export const routes = Router();



routes.get("/", async (_req, res) => {
     res.json({message: 'Hello World'});
});