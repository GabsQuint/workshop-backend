import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllAtas } from './getAtaByColaborador/implementation';

export const atasRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/atas`,
        controller: ControllerAllAtas
    },
]