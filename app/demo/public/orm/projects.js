import {Entity, Record} from "pckg-orm/src/orm";

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
