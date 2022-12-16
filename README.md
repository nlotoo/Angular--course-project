# Angular--course-project
## Created with AngularJS/TypesScript.


- In the 'client' folder directory, you can run: `npm start` / `ng serve`
You will  see any lint errors in the console.
- In the 'coffeLovers API' folder directory, you can run: `npm start`
You will  see any lint errors in the cmd.

## Functionality
* Implemented authentication and authorization.
* Ability to  view the coffee-card of other users.
* Ability to edit and delete personal coffe-card.
* Ability to like and disklike other users card-post and add them to Favourites.
* Ability to like and disklike other user comments and type comments
* Interactive UX.

## Technologies
* AngularJS / TypeScript
* HTML, CSS, JavaScript
* Еxpress JS, Node.js, Mongo DB 

## Application Pages
* **Home** - Home page are wellcome page and  for users who aren’t loged or registered to redirect for login or registration pages.
* **About** - Dummy page.
* **Regsiter** - registration with email and password.
* **Catalog** - view all cooffe-cards in the database.
* **Add new Coffee** - create a coffee-card and save it in the database.
* **Edit your pet** - you can edit a coffee-card and save it in the database or delete coffee-card from database.
* **Details** -Shows details about a curent coffe-card. Unauthorised users can add it to Favourites. Authorized users can edit or delete the certain coffee-card. 
* **My Favorites** - Shows the registered user's Favourite coffe-cards. 


## Access control:

* Only authorized users can view all Coffee-card in database.
* Only authorized users can create a Coffee-card or like another one.
* Only authenticated users can access their favourite catalog Coffee-card.
* Only authorized users (creators) can edit or delete a Coffee-card.
* Only authorized users can create comments and  edit or delete it.
* Unregistered and authorized users have access to the homepage.
* Only unregistered users have access to the login and register pages.


