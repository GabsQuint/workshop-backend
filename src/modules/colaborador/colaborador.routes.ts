import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';

export const commonRoutes: RouteConfigInterface[] = [
    {
        method: 'get',
        url: `/api/teste`,
        controller: console.log('teste')
    },
]