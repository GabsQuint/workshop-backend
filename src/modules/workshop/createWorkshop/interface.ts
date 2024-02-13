import { CreateWorkshopModel } from "./model";

export interface ICreateWorkshopInterface {
    createWorkshop(props:CreateWorkshopModel): Promise<any>;
}