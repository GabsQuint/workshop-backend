export type colaboradorType = {
    name:string 
}
export class CreateColaboradorModel {
    private _name: string;

    constructor(props: colaboradorType) {
        this._name = props.name;
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value;
    }

}