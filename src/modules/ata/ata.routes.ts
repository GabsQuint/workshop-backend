import { RouteConfigInterface } from '../../domain/interface/routeConfig.interface';
import { ControllerAllAtas } from './getAtaByWorkshop/implementation';
import { ControllerAllAtasByDate } from './getAtaByDate/implementation';
import { CreateAta } from './createAta/implementation';
import { AddColaborador } from './addColaborador/implementation';
import { DeleteColaborador } from './deleteColaborador/implementation';

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
    },
    {
        method: 'post',
        url: `/api/ata`,
        controller: CreateAta
    },
    {
        method: 'put',
        url: `/api/atas/colaboradores`,
        controller: AddColaborador
    },
    {
        method: 'delete',
        url: `/api/atas/colaboradores`,
        controller: DeleteColaborador
    }
]