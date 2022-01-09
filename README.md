###### Avengers-API

### General info
The Avengers-API pays tribute to the best movie franchise in the history of filmmaking. (yes, i said it)

### Deployed here: https://avengers-api-jon-cao.herokuapp.com/

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
| /tea      | GET                  | Displays all avengers
| /tea      | POST               | Creates new avenger
| /tea      | DELETE            | Deletes all avengers
|/tea/:name| GET     | Displays a specific avenger, given its name
|/tea/:name| DELETE | Deletes a specific avenger, given its name

### Technologies
Project is created with:
Node
Express
MongoDB
