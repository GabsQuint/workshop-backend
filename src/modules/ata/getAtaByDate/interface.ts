import { AtaByDateModel } from "./model";

export interface IAtaByDateInterface {
    getAtaByDate(props:AtaByDateModel): Promise<AtaByDateModel>;
}