<?php

namespace OpenCode\Demo\Provider;

use OpenCode\Demo\Controller\Demo as DemoController;
use Pckg\Framework\Provider;

class Demo extends Provider
{

    public function routes()
    {
        return [
            routeGroup([], [
                'homepage' => vueRoute('/', 'page-homepage', ['seo:title' => 'Homepage']),
                'contact' => vueRoute('/contact', 'page-contact', ['seo:title' => 'Contact']),
            ]),
            routeGroup([
                'controller' => DemoController::class,
            ], [
                'api' => route('/api', 'index'),
            ])
        ];
    }
}
