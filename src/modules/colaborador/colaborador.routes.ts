import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllColaboradores } from './get-all-colaboradores/implementation';
import { CreateColaborador } from './createColaborador/implementation';

export const colaboradoresRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/colaboradores`,
        controller: ControllerAllColaboradores
    },
    {
        method: 'post',
        url: `/api/colaborador`,
        controller: CreateColaborador
    },
]