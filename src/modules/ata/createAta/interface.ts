import { CreateAtaModel } from "./model";

export interface ICreateAtaInterface {
    createAta(props:CreateAtaModel): Promise<any>;
}