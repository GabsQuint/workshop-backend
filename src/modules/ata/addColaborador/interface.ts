import { AddColaboradorModel } from "./model";

export interface IAddColaboradorInterface {
    addColaborador(props:AddColaboradorModel): Promise<any>;
}