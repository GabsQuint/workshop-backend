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
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
    }

    on(method: string, url: string, callback: Function) {
        this.router[method](
            url, 
            async function (req: Request, res: Response, next: NextFunction) {
                try {
                    const requestCustom = {
                        ...req.params,
                        ...req.query,
                        ...req.body
                    };
                
                    const output = await callback(requestCustom);
                    return res.json(output);
                } catch (err) {
                    next(err);
                }
            }
        )
    }

    listen(port: number): void {
        console.log(`[SERVER] listening on port ${port}`);
        
        this.app.listen(port);
    }
}