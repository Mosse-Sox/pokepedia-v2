For installation instructions refer to [the root README.](https://github.com/Mosse-Sox/pokepedia-v2/blob/060b30cc12e1e53fcb35fc12815194f142703e57/README.md)

## Set-up db

Note: This project is using Docker, please install [Docker](https://www.docker.com/get-started/) before following the setup. 

1. Create a .env and paste the following code structure within. Note: this information is only for the docker container, each one of us will have our own. In production we will not reveal such secrets and will not be using docker for the production database. 

```
DATABASE_HOST=db-dev
DATABASE_PORT=5432
DATABASE_USER=devUser
DATABASE_PASSWORD=postdev
DATABASE_NAME=poke-dev
DATABASE_URL="postgresql://devUser:postdev@localhost:5434/poke-dev?schema=public"
```

<br>

2. In your terminal, from the root of the project, you will run the command `docker-compose up -d` to start your database. To confirm that its running `docker ps`. If you ever need to totally restart the database from scratch you can run `docker system prune`, note this command will take out all your docker containers so beware, but its there if you need it. If you pruned then you can start it up again by running the first command.

<br>

3. You will run, from the api directory, `npx prisma generate`. You must have your docker container running for this step to work. Then run `npx prisma migrate dev`. This will bring your database up to speed.




<hr>

## Notes

<br>

If you would like to access the psql interface through the command line to do manual things outside of prisma studio you can run this command and access it like you would if psql was on your host machine (typically run by typing psql in your terminal)

```docker exec -it docker-container-name psql userName -d db-name```

<br>

### Using Prisma

Whenever you make an update to the schema you can run `npx prisma migrate dev` and prisma will generate the new sql for you. It is good practice to run `npx prisma generate` whenever you make changes to the schema as well. 

Prisma comes with a gui that loads in your browser, you can do the actions you are used to from the command line in there as well as view all your tables, etc. To open the gui you will run this command in your terminal from the api directory, `npx prisma studio`. 