export type workshopType = {
    name:string 
    dateCompletion: string
    description: string
}
export class CreateWorkshopModel {
    private _name: string;
    private _dateCompletion: string;
    private _description: string;

    constructor(props: workshopType) {
        this._name = props.name;
        this._dateCompletion = props.dateCompletion;
        this._description = props.description;
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value;
    }

    get dateCompletion(): string {
        return this._dateCompletion
    }

    set dateCompletion(value: string) {
        this._dateCompletion = value;
    }

    get description(): string {
        return this._description
    }

    set description(value: string) {
        this._description = value;
    }

}