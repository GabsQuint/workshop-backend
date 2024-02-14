export type ataType = {
    workshopName:string 
}
export class CreateAtaModel {
    private _workshopName: string;

    constructor(props: ataType) {
        this._workshopName = props.workshopName;
    }

    get workshopName(): string {
        return this._workshopName
    }

    set workshopName(value: string) {
        this._workshopName = value;
    }

}