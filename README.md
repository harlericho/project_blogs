# Project blogs

Computer Version:

[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/es-es/windows/windows-11?r=1)
[![Linux](https://img.shields.io/badge/Linux-FF6600?style=for-the-badge&logo=linux&logoColor=white)](https://ubuntu.com/)
[![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)](https://www.apple.com/la/mac/)

> <strong> Frontend - Backend - PostgreSQL project allows the registration of a blog.</strong>

[![VueJS](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://cli.vuejs.org/)
[![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/es/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/es/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Linux](https://img.shields.io/badge/Linux-FF6600?style=for-the-badge&logo=linux&logoColor=white)](https://www.linux.org/)
[![Windows](https://img.shields.io/badge/Windows-017AD7?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/es-es/windows/windows-11?r=1)
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)

## 💻 Pre requirements

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />

To use the project on your machine, you must have the following installed:

- Have the mysql service installed or a local server that has the service.
- Have installed nodejs higher than v14 and PostgreSQL higher than v12.

# 🛠️ BACKEND

## 🌐 Database <project_blogs>

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />

Before starting the project <project_blogs>, you must follow these steps:

1. You must have created a database <db_apiblogs>, on your local server.
2. Create an .env at the root of the project.
3. In the .env file add the execution port of the project and the PostgreSQL credentials:

   ```
   PORT=9000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=db_apiblogs
   DB_USER=root
   DB_PASSWORD=root
   ```

4. Copy the database script found in path, to your PostgreSQL engine:

   > db/script.sql

## 🌐 Database Docker <project_blogs>

<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />

Before starting the <project_blogs> project using <strong>Docker</strong>, you must follow these steps:

1. Have docker and docker-compose installed.
2. Run in the root of the project <project_blogs> the following command:

   ```
   docker-compose up -d
   ```

3. Create an .env at the root of the project.
4. In the .env file add the execution port of the project and the PostgreSQL credentials:

   ```
   PORT=9000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=db_apiblogs
   DB_USER=root
   DB_PASSWORD=root
   ```

5. Connect to PostgreSQL with the credentials that are in the .yml or .env file.
6. Copy the database script found in path, to your PostgreSQL engine:

   > db/script.sql

## ☕ Requirements <project_blogs>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />

To start the project <project_blogs>, you must follow the following steps:

1. Open a terminal at the root of the project of backend.
   > project_blogs/backend/
2. In the main root of the project of backend execute the following in your terminal:
   ```
   npm install
   ```

## 🚀 Start project <project_blogs>

To start the project <project_blogs>, you must follow the following steps:

- Open a terminal at the root of the project of backend.
- Run the following command:
  ```
  npm run test
  ```

# 🖼️ FRONTEND

## ☕ Requirements <project_blogs>

<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" />

To start the project <project_blogs>, you must follow the following steps:

1. Open a terminal at the root of the project of frontend.
   > project_blogs/frontend/
2. In the main root of the project of backend execute the following in your terminal:
   ```
   npm install
   ```

## 🚀 Start project <project_blogs>

To start the project <project_blogs>, you must follow the following steps:

- Open a terminal at the root of the project of frontend.
- Run the following command:
  ```
  npm run serve
  ```
- Open [http://localhost:8080](http://localhost:3000) to view it in your browser.

<div align="center">

### My social accounts

![](https://avatars.githubusercontent.com/u/42042270?s=48&v=4)

[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/harlericho)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harlericho)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/u/harlericho)
[![Devlog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)](https://harlericho.netlify.app)

</div>

<p align="center"><strong>Copyright © 2022 Harlericho</strong></p>
