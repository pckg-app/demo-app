import {Entity, Record} from "../../../../vendor/pckg/helpers-js/webpack/orm";

export class Clients extends Entity {

    constructor() {
        super();
        this.$path = 'clients';
        this.$record = Client;
    }

}

export class Client extends Record {
    constructor(data) {
        super(data);
        this.$entity = Clients;
    }
}
