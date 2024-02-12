import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllAtas } from './getAtaByWorkshop/implementation';
import { ControllerAllAtasByDate } from './getAtaByDate/implementation';

export const atasRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/atas`,
        controller: ControllerAllAtas
    },
    {
        method: 'get',
        url: `/api/atasByDate`,
        controller: ControllerAllAtasByDate
    }
]