
## VehiclesAPI
A project that creates a small RESTful API written in Express connecting to Postgres database. The Database has the following design: <br>
![db](./design/caryard.png) <br>
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Code](#example-code)

## General Info
The aim of this project is use plain SQL then Sequelize to connect express with a relational database. It was also an opportunity to practice using Postman with API endpoints<br>
Endpoints are /makes, /models, /vehicles, /inventory, /colours and /<table>/:id for each table <br>
<b>Tasks to complete: </b> <br>
Step 1: initial project setup <br>
Step 2: finish endpoints and add jest tests <br>
Step 3: implement SQL queries <br>
Step 4: use dotenv, create db design and copy postgres db <br>
Step 5: use sequelize instead of SQL <br>
<br>
## Technologies
This project uses NodeJS, ExpressJS, Jest, Postman and Postgres 15
 Back end: body-parser 1.20.1, express 4.18.2, pg 8.8.0, pg-store 2.3.4, sequelize 6.28.0, jest 29.3.1, supertest 6.3.3,<br>
 Development Environment: nodemon 2.0.20,  dotenv 16.0.3
## Setup
You need to have a Postgres Client installed to view and test the database. You can import the design/carYard.sql file into a new database.<br>
Fork or clone the project, make sure the latest version of Node is installed, run <br>
### npm i  <br>
then update the .env with values for PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT for your database, now <br>
### npm run start. <br>
You can run the tests using <br>
### npm run test. <br>
## Example Code
SQL Query for Vehicle is: <br>
```
`SELECT "Vehicle".vehicle_id,"Make".make_name,"Model".model_name FROM "Vehicle", "Make", "Model" WHERE "Vehicle".make_id = "Make".make_id AND "Vehicle".model_id = "Model".model_id ` 
```
Using Sequelize, models are defined like this: <br>
```
module.exports = (sequelize, Sequelize) => { 
    const model = sequelize.define("model", { 
      model_name: { 
        type: Sequelize.STRING, 
        allowNull: false 
      }}, { 
        freezeTableName: true 
      } 
    ) 

    return model 
  } 
  ``` 
  and <br>
  
  ```
  module.exports = (sequelize, Sequelize) => { 
    const vehicle = sequelize.define("vehicle", { 

    }, { 
      freezeTableName: true 
    })

    return vehicle
  }
  ```

**Code was written without semi colons, just using ASI
