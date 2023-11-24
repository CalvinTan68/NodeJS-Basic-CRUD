# How to use

1. Clone the repo of course
   `https://github.com/CalvinTan68/NodeJS-Basic-CRUD.git`
2. Install Nodemon globally with
   ```shell
   npm install -g nodemon
   ```
3. Rename `.env.example` file to `.env` and fill out the `DATABASE_URL`
4. Run this command
   ```shell
   npm install && npx prisma migrate dev
   ```
5. Finally, run this command
   ```shell
   nodemon app
   ```

# Base URL

The base URL will be `localhost:5000/data`. You can test it in API platform such as Postman, Insomnia, etc.

### Things to note

- This is using `import` method instead of `require`,
