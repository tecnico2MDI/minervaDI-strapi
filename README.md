# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

To deploy on aws you need to follow next steps:

- login: `aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 743014983075.dkr.ecr.eu-central-1.amazonaws.com/minervadi-strapi`
- build docker image: `docker build -t 743014983075.dkr.ecr.eu-central-1.amazonaws.com/minervadi-strapi:latest .`
- Publish docker image: `docker push 743014983075.dkr.ecr.eu-central-1.amazonaws.com/minervadi-strapi:latest`

After successful publish of docker image on aws ecr you need to manually deploy the image
> [Clusters > minerva-strapi-v2 > Services > minerva-strapi-manual](https://eu-central-1.console.aws.amazon.com/ecs/v2/clusters/minerva-strapi-v2/services/minerva-strapi-manual/health?region=eu-central-1)
- Stop current task
- Update service (choose last family revision if is not LATEST)
