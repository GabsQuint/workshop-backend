import { CreateWorkshopModel } from "./model";

export interface ICreateWorkshopModelInterface {
    createWorkshop(props:CreateWorkshopModel): Promise<any>;
}