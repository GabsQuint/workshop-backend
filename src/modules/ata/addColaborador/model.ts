export type colaboradorType = {
    ataId:number 
    colaboradorName: string
}
export class AddColaboradorModel {
    private _ataId: number;
    private _colaboradorName: string;

    constructor(props: colaboradorType) {
        this._ataId = props.ataId;
        this._colaboradorName = props.colaboradorName;
    }

    get ataId(): number {
        return this._ataId
    }

    set ataId(value: number) {
        this._ataId = value;
    }

    get colaboradorName(): string {
        return this._colaboradorName
    }

    set colaboradorName(value: string) {
        this._colaboradorName = value
    }

}