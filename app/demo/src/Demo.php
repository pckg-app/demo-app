<?php

use OpenCode\Demo\Provider\Demo as DemoProvider;
use Pckg\Framework\Provider;
use Pckg\Framework\Response\Afterware\EncapsulateResponse;
use Pckg\Manager\Middleware\SetSeoTitle;
use Pckg\Manager\Provider\Manager;

// @codingStandardsIgnoreLine
class Demo extends Provider
{

    public function providers()
    {
        return [
            Provider\Framework::class,
            Manager::class,
            Provider\Frontend::class,
            DemoProvider::class,
        ];
    }

    public function middlewares()
    {
        return [
            SetSeoTitle::class,
        ];
    }

    public function afterwares()
    {
        return [
            EncapsulateResponse::class,
        ];
    }

    public function assets()
    {
        return [
            'libraries' => [
                '/vendor/pckg/helpers-less/boot/_all.less',
                path('build') . 'libraries.js',
            ],
            'footer' => [
                path('build') . 'footer.css',
                'less/app.less',
            ],
            'vue' => [
                path('build') . 'footer.js',
            ],
            'config' => function () {
                return assetManager()->buildAsset(function () {
                    $config = config()->getPublicConfig();

                    return 'var Pckg = Pckg || {}; Pckg.locale = {
        languages: ' . json_encode(localeManager()->getLanguages()->keyBy('slug')->map('title')) . '
    };

    Pckg.config = JSON.parse(utils.base64decode(' . json_encode($config) . '));

    Pckg.site = {
        domain: ' . json_encode(config('domain')) . ',
        url: ' . json_encode('https://' . config('domain')) . '
    };

        Pckg.router = {
        urls: ' . json_encode(router()->getPublicRoutes()) . ',
        vueUrls: ' . json_encode(router()->getVueRoutes()) . '
    };';
                });
            }
        ];
    }
}
