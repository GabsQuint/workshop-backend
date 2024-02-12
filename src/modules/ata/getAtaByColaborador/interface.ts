import { AtaByColaboradorModel } from "./model";

export interface IAtaByColaboradorInterface {
    getAtaByColaborador(props:AtaByColaboradorModel): Promise<AtaByColaboradorModel>;
}