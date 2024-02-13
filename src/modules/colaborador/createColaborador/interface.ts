import { CreateColaboradorModel } from "./model";

export interface ICreateColaboradorInterface {
    createWorkshop(props:CreateColaboradorModel): Promise<any>;
}