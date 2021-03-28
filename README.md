# pckg-app/demo-app

Demo implementation of [pckg](https://github.com/pckg) framework.

![Build status](https://github.com/pckg-app/demo-app/workflows/Demo%20App%20CI/badge.svg)

# Features

- See [pckg/skeleton](https://github.com/pckg/skeleton) for in-depth core feature description
- Twig & Vue layout examples - `frontend.twig` & `frontend.vue`
- Homepage & Contact page - `homepage.vue` & `contact.vue`
- Vue & API routes examples - `Provider/Demo.php`
- Asset registration - `Demo.php`
- SEO support - `Provider/Demo.php`
- Static storage (logo)
- Static database (Projects & Clients) + API with ORM
- Almost-zero-code Webpack & Vue setup
- Vue, Vuex, VueRouter, ...

# Start dev environment

Dev environment with system dependencies is available in `schtr4jh/pckg:latest` Docker image.

```
$ docker stack deploy demo-app docker-compose.yml
```

Install dependencies.

`# composer install`
`# yarn install`

Create static storage directories for the application.

`# php console project:init`

This will create the `storage` folder with some mandatory subfolders not included in GIT.

# Access the application

Open in web browser.

`https://localhost:8072/`

# Directory structure

`vendor`, `components` and `node_modules` - dependency managers directories
`config` - root project configuration
`www` - directory that will be exposed to the internet
`storage` - directory for framework, cache, uploads, tmp and other private and public files
`app/demo/config` - app configuration
`app/demo/src` - app source files
`app/demo/public` - static assets (private, can be mounted to `www`)

_Note: it is recommended to disable discovery of dependency manager directories, `www` and `storage`._

# Test the application

Runs mocha + codeception tests + static code analysis.

`# php console project:test`

# More
