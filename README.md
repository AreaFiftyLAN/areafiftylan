# areafiftylan

This website is still under construction. This is not in use yet

## Development

Development is done with Docker, with the settings provided.
To run all needed components, a compose file is provided.
This can be run with:

```bash
docker-compose --force-recreate
```

Note: the force recreate option is required as there is currently a [known issue](https://github.com/nuxt/framework/issues/3998) with Nuxt in Docker.
