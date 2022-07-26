# AreaFiftyLAN

This website is still under construction. This is not in use yet

## Development

Development is done with Docker, with the settings provided.
To run all needed components, a compose file is provided.
Note: the force recreate option is required as there is currently a [known issue](https://github.com/nuxt/framework/issues/3998) with Nuxt in Docker.
This can be run with:

```bash
docker-compose up -d --force-recreate
```

This exposes three services:

-   The application itself, running on [localhost:3000](http://localhost:3000).
-   An Adminer instance, to explore the database, accesible at [localhost:8080](http://localhost:8080).
-   Mailcatcher to view outgoing email at [localhost:8081](http://localhost:8081).

If you add new files or folders to the root directory, and you want the application to access them, you will have to add a mount to the container.
This can be done under `volumes` for the server service.
Then restart the compose instance with `docker-compose down && docker-compose up -d --force-recreate`.
