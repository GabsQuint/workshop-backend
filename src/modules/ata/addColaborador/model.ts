export type colaboradorType = {
    ataId:number 
    colaboradorId: number
}
export class AddColaboradorModel {
    private _ataId: number;
    private _colaboradorId: number;

    constructor(props: colaboradorType) {
        this._ataId = props.ataId;
        this._colaboradorId = props.colaboradorId;
    }

    get ataId(): number {
        return this._ataId
    }

    set ataId(value: number) {
        this._ataId = value;
    }

    get colaboradorId(): number {
        return this._colaboradorId
    }

    set colaboradorId(value: number) {
        this._ataId = value;
    }

}