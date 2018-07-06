This must stop:
---------------
![Nevar again](https://i.makeagif.com/media/8-22-2014/GO_DT4.gif)


Koala Holla
===========

Our client, Koala Holla (1976 Llama Comma Drive, Walla Walla WA) is a non-profit dedicated to the ethical transitioning of koalas from the outdoors (whereupon they may be rained) to urban areas where roofs exist. Your team has been hired build a web app to handle their terrarium residents.

Technologies
------------

* Mongo
* Express
* AngularJS
* Node

Client needs
------------
Koala Holla has provided a table of their current inventory:

| id | name    | gender | age | ready_to_transer | notes                            |
|----|---------|--------|-----|------------------|----------------------------------|
| 1  | Scotty  | M      | 4   | Y                | Born in Guatemala                |
| 2  | Jean    | F      | 5   | Y                | Allergic to lots of lava         |
| 3  | Ororo   | F      | 7   | N                | Loves listening to Paula (Abdul) |
| 4  | Logan   | M      | 15  | N                | Enjoys the sauna                  |
| 5  | Charlie | M      | 9   | Y                | Favorite band is Nirvana         |
| 6  | Betsy   | F      | 4   | Y                | Has a pet iguana                 |


They want a mongo database collection that houses this information and can be viewed at any time. The client has provided a file that can imported into your database to get started. To import the data, run the following commands:

1. Make a new database- koalaholla either with robo 3T or the mongo command line.
2. In Terminal, navigate to the project folder.
3. Run this command: `mongoimport --db koalaholla --collection koalas --file koalas.js`

They have also provided their logo and the source code from when Lou (a KH employee) tried to spin up a MEAN stack project to support this, but had to leave for foraging school in Finland before he could finally finish. (MEAN is short for Mongo, Express, AngularJS, Node).

They need the ability to add a Koala to the database. Make a form with the appropriate info. Save the koala in the database.

They need the ability for mark a Koala ready for transfer. Each koala in your UI needs a button in that reads 'Ready for Transfer'. When the user clicks on the button, it should update the database for the specific Koala. The 'Ready for Transfer' button should only appear for Koalas that haven't yet been marked ready for transfer.



### STRETCH GOALS

1. Ability to delete a specific Koala from the database.  
2. Confrimation dialog before deleting (research SweetAlert).
3. Ability to toggle the display of Koalas ready for transfer.
4. Add form validation, additional styling and a README.md.
5. Client side filtering with a text box
6. Ability to edit other information (Name, Age, Notes) for existing Koalas in the db.


Sample Output
--------
Your final product may look something like this:

![sample](sample.png)
