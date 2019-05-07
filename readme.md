# Noter-Taker

The goal was to create an app to create, read, delete, and store notes using Javascript, Node.js and MySQL without the browser refreshing.

## App hosted on Heroku 

  https://note-taker-mac.herokuapp.com/

## Getting Started Locally on computer

- Clone repo.
- Run command in Terminal or Gitbash 'npm install'
- Run command in Terminal or Gitbash 'npm mysql express'
- Create the database in mysql workbench.
- In db/connection.js change passowrd and port.
- Run command in Terminal or Gitbash 'node server.js'
- The app is now ready to use in browser at localhost:3000

### How to use the app

1. The home page (https://note-taker-mac.herokuapp.com/)
    Click the Start App button to go see previous notes or create new ones.
    ![Home Page]() 


2. The notes page (https://note-taker-mac.herokuapp.com/notes)
    ![Notes Page]() 


    * Read:
      - To view the whole note(with body), click on the view button assoicated with that note.
    * Delete:
      - To delete a note, click on the delete button and the note will be deleted.
    * Create:
      - To create a note, click on the Create Note button after entering the desired note title and note content.
      
## Technologies used
- Node.js
- MYSQL NPM Package (https://www.npmjs.com/package/mysql)
- Express NPM Package (https://www.npmjs.com/package/express)


## Built With
* VS Code - Text Editor
* MySQLWorkbench
* Terminal/Gitbash
* Heroku - Hosting

## Authors
* **Harsh Patel**