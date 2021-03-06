<template>
    <div>
        <h1>Clients</h1>
        <table>
            <thead>
            <tr>
                <th>Client</th>
                <th>Projects</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="client in clients">
                <td>{{ client.id }}</td>
                <td>{{ client.id }}</td>
                <td>
                </td>
            </tr>
            <tr v-for="client in projects">
                <td>{{ client.id }}</td>
                <td>{{ client.id }}</td>
                <td>
                </td>
            </tr>
            </tbody>
        </table>
        {{ fetcher }}
    </div>
</template>

<script>
import {Fetcher} from "../../../../../../../vendor/pckg/helpers-js/webpack/orm.js";
import {Clients} from "../../../../../public/orm/clients";
import {Projects} from "../../../../../public/orm/projects";

export default {
    data() {
        return {
            clients: [],
            projects: [],
            fetcher: {}
        };
    },
    methods: {
        ...Fetcher('projects', Projects),
        ...Fetcher('clients', Clients),
    },
    created() {
        this.resolveClients();
        this.resolveProjects();
    }
}
</script>
