###### Avengers-API

### The Avengers-API pays tribute to the best movie franchise in the history of filmmaking. (yes, i said it)

### Deployed here: https://avengers-api-jon-cao.herokuapp.com/

### Technologies
Project is created with:
* Node.js
* Express
* MongoDB

#### The Avenger Object
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|name| the avenger's name | String|
|real_name| the description | String |
|powers|the avenger's powers  |String |
|abilities|the avenger's abilities | String|
|actor|the actor playing the avenger | String |


#### Routes 
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /avenger      | GET                  | Displays all avengers
| /avenger      | POST               | Creates new avenger
| /avenger      | DELETE            | Deletes all avengers
|/avenger/:name| GET     | Displays a specific avenger, given its name
|/avenger/:name| DELETE | Deletes a specific avenger, given its name


