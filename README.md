# AreaFiftyLAN

This website is still under construction. This is not in use yet :(.

## Development

Development is done with Docker, with the settings provided.
To run all needed components, a compose file is provided.
Note: the force recreate option is required as there is currently a [known issue](https://github.com/nuxt/framework/issues/3998) with Nuxt in Docker.
This can be run with:

```bash
docker-compose up --force-recreate
```

This exposes several services:

-   The application itself at [localhost:3000](http://localhost:3000).
-   The Postgres database to connect to, accesible at the default port `5432`.
-   An Adminer instance, to explore the database, accesible at [localhost:8080](http://localhost:8080).
-   Mailcatcher SMTP server, at port 1025.
-   Mailcatcher to view the outgoing email at [localhost:8081](http://localhost:8081).
