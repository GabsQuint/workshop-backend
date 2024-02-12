import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllAtas } from './getAtaByWorkshop/implementation';

export const atasRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/atas`,
        controller: ControllerAllAtas
    },
]