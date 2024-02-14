export type ataType = {
    workshopId:number 
}
export class CreateAtaModel {
    private _workshopId: number;

    constructor(props: ataType) {
        this._workshopId = props.workshopId;
    }

    get workshopId(): number {
        return this._workshopId
    }

    set workshopId(value: number) {
        this._workshopId = value;
    }

}