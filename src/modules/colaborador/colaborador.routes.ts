import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllColaboradores } from '../colaborador/get-all-colaboradores/implementation';

export const colaboradoresRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/colaboradores`,
        controller: ControllerAllColaboradores
    },
]