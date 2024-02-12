import { AtaByWorkshopModel } from "./model";

export interface IAtaByWorkshopInterface {
    getAtaByWorkshop(props:AtaByWorkshopModel): Promise<AtaByWorkshopModel>;
}