type AtaType = {
    data: string;
}

export class AtaByDateModel {
    private _ataType: AtaType;

    constructor(ataType: AtaType) {
        this._ataType = ataType;
    }

    get data(): string {
        return this._ataType.data;
    }
}