# AreaFiftyLAN

This website is still under construction. This is not in use yet :(.

## Development

To run the application in development, you will have to have an recent version of Node installed (16 or 18).
Additional services are run in Docker, but a compose file is provided.
First you will have to start with with Docker Compose:

```bash
docker-compose up -d
```

This exposes several services:

-   The Postgres database to connect to, accesible at the default port `5432`.
-   An Adminer instance, to explore the database, accesible at [localhost:8080](http://localhost:8080).
-   Mailcatcher SMTP server, at port 1025.
-   Mailcatcher to view the outgoing email at [localhost:8081](http://localhost:8081).

To then start the server itself, you need to install the dependencies first using `yarn install`.
When this is done you can start the dev server with `yarn dev`.
Now you can view the server at [localhost:3000](http://localhost:3000).
