import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { CreateWorkshopByDate } from './createWorkshop/implementation';

export const workshopRoutes: RouteConfigInterface[] = [
    {
        method: 'post',
        url: `/api/workshops`,
        controller: CreateWorkshopByDate
    }
]