# About Project

This is just a simple basic NodeJS server with functionality to Create, Read, Update, Delete (CRUD). Use this as boilerplate

# How to use

1. Clone the repo of course
2. Install `nodemon` globally (if you don't have nodemon yet)
   ```shell
   npm install -g nodemon
   ```
3. If you choose to use docker, then run
   ```shell
   docker compose up -d
   ```
4. Rename `.env.example` file to `.env` and configure the `DATABASE_URL`
5. Run this command
   ```shell
   npm install && npx prisma migrate dev
   ```
6. Finally, run this command
   ```shell
   nodemon app
   ```

# Footnotes

- The base URL will be `localhost:5000/data`. You can test it in API platform such as Postman, Insomnia, etc.

- This is using `import` method instead of `require`, which is using ES6 and it's better when the project is getting larger
