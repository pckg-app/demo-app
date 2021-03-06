<?php

namespace OpenCode\Demo\Provider;

use OpenCode\Demo\Controller\Clients;
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
                'clients' => vueRoute('/clients', 'page-clients', ['seo:title' => 'Clients']),
                'projects' => vueRoute('/projects', 'page-projects', ['seo:title' => 'Projects']),
            ]),
            routeGroup([
                'controller' => DemoController::class,
            ], [
                'api' => route('/api', 'index'),
            ]),
            routeGroup([
                'controller' => Clients::class,
                'urlPrefix' => '/api',
                'namePrefix' => 'api',
            ], [
                'clients' => route('/clients', 'index'),
                'projects' => route('/projects', 'projects'),
            ])
        ];
    }
}
