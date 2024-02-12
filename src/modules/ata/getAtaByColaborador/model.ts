type AtaType = {
    workshopNome: string;
}

export class AtaByColaboradorModel {
    private _ataType: AtaType;

    constructor(ataType: AtaType) {
        this._ataType = ataType;
    }

    get workshopNome(): string {
        return this._ataType.workshopNome;
    }
}