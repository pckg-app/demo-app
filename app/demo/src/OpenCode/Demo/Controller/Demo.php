<?php

namespace OpenCode\Demo\Controller;

class Demo
{

    public function postIndexAction()
    {
        return [
            'message' => 'Hello from backend!',
        ];
    }
}
