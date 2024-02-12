import { AllColaboradoresInterface } from "./interface";

export class AllColaboradoresRepository implements AllColaboradoresInterface {

    async getAll(): Promise<unknown> {
        try {
            const test = {
                teste: 'teste'
            }
            return test
        } catch (error) {
            console.log(error);
        }
    }
}