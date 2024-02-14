import { DeleteColaboradorModel } from "./model";

export interface IDeleteColaboradorInterface {
    deleteColaborador(props:DeleteColaboradorModel): Promise<any>;
}