import compression from 'compression';
import express, { Express, NextFunction, Request, Response, Router } from 'express';
import cors from "cors";

export class ExpressAdapter {
    app: Express;
    router: Router | any;

    constructor() {
        this.app = express();
        this.router = Router();
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use(cors());
        this.app.use('/', this.router)
    }

    on(method: string, url: string, callback: Function) {
        this.router[method](
            url, 
            async function (req: Request, res: Response, next: NextFunction) {
                
                const requestCustom = {
                    ...req.params,
                    ...req.query,
                    ...req.body
                };
            
            const output = await callback(requestCustom);
            return res.json(output);
        })
    }

    listen(port: number): void {
        console.log(`[SERVER] listening on port ${port}`);
        
        this.app.listen(port);
    }
}