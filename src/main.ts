import { ExpressAdapter } from "./infra/api/ExpressAdapter";
import { HttpRouter } from './infra/api/httpRouter.api'
import { HttpRouterInterface } from './domain/interface/httpRouter.interface'
import { colaboradoresRoutes } from "./modules/colaborador/colaborador.routes";
import { atasRoutes } from "./modules/ata/ata.routes";
import { workshopRoutes } from "./modules/workshop/workshop.routes";

export class Main {
  private expressAdapter: ExpressAdapter;
  private httpRouter: HttpRouterInterface;

  constructor() {
    this.expressAdapter = new ExpressAdapter();
    this.httpRouter = new HttpRouter(this.expressAdapter);
  }

  start() {
    try {
      this.expressAdapter.listen(3000)
      console.info(`[Application] Initializing routes...`);
      this.httpRouter.init([...colaboradoresRoutes, ...atasRoutes, ...workshopRoutes])
    } catch (error) {
      console.error(`[Application] Error on start application: ${error}`);
    }
  }
}

const app = new Main();
app.start();