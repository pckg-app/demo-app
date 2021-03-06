import {Entity, Record} from "../../../../vendor/pckg/helpers-js/webpack/orm";

export class Projects extends Entity {

    constructor() {
        super();
        this.$path = 'projects';
        this.$record = Project;
    }

}

export class Project extends Record {
    constructor(data) {
        super(data);
        this.$entity = Projects;
    }
}
