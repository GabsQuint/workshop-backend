import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { CreateWorkshopAtasByDate } from './createWorkshop/implementation';

export const workshopRoutes: RouteConfigInterface[] = [
    {
        method: 'post',
        url: `/api/workshops`,
        controller: CreateWorkshopAtasByDate
    }
]