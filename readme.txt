This is my first RESTful application, thanks to Mosh Hamedani. 

Use POSTMAN to check for the routes: 

GET method (ROUTES)

localhost:/3000/people

localhost:/3000/:id 

(id is parameter)

(id available - 1 to 3)


POST METHODS - uses JSON parser by express app. 

POST method (ROUTES)

localhost:/3000/people/add

Insert as follows in POSTMAN when you pass in JSON input

{
"name":"",
"age":0,
"job" ""
}

Note- name takes in minimum 3 characters, age accepts only integers and job just requires to be filled up.


PUT METHODS - uses parameter just like in GET method

localhost:/3000/people/edit/:id

(id is available - 1 to 3)


use JSON object to update 

{
"name":"",
"age":0,
"job" ""
}


DELETE METHOD - uses paramater just like GET and PUT method 

localhost://3000/delete/:id

(id is available 1-3)


Thanks for reading through!


