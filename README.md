# Sample AWS Sam application

- API gateway + Authorizer lambda + Lambda
- Typescript

## Build

```
sam build
```

## Deploy

You'll need to tell whether you want to deploy into `staging` or `production` see [samconfig.tom](./samconfig.toml).

### Deploying to production

```
sam deploy --config-env production
```

### Deploying to staging

```
sam deploy --config-env staging
```
