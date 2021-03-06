<?php

namespace OpenCode\Demo\Controller;

use OpenCode\Demo\Entity\Clients as ClientsEntity;
use OpenCode\Demo\Entity\Projects;

class Clients
{

    public function getIndexAction()
    {
        return [
            'clients' => (new ClientsEntity())->all(),
        ];
    }

    public function getProjectsAction()
    {
        return [
            'projects' => (new Projects())->all(),
        ];
    }
}
