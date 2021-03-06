<?php

namespace OpenCode\Demo\Entity;

use Pckg\Database\Entity;
use Pckg\Database\Repository\Custom;

class Projects extends Entity
{

    protected $repositoryName = Custom::class;

    public function getCustomRepositoryCollection()
    {
        return collect([
            [
                'id' => 2,
            ]
        ], $this->record);
    }
}
