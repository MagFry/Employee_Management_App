## How to run project locally 
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
npm run dev
```

and visit: http://localhost:8000/

## Description
+ Backend: Django REST framework
+ Frontend: React + Redux

## Deployed on heroku with PostgreSQL database
Link: https://emp-app-prod.herokuapp.com/

## REST API endpoints 

Employees
+ **GET** https://emp-app-prod.herokuapp.com/api/employees/ - List all employees for authorized department 
+ **POST** https://emp-app-prod.herokuapp.com/api/employees/ - Add new employee to the list of employees of authorized department 
+ **DELETE** https://emp-app-prod.herokuapp.com/api/employees/{employee_id} - Remove employee of given employee_id from the list of department employees

Departments
+ **POST** https://emp-app-prod.herokuapp.com/api/auth/register - Creating a new department with token used for authorization
+ **POST** https://emp-app-prod.herokuapp.com/api/auth/login - Login registered department with a new token into employees management page
+ **GET** https://emp-app-prod.herokuapp.com/api/auth/department - Listing information of the department with given token in a header
+ **POST** https://emp-app-prod.herokuapp.com/api/auth/logout - Logout department with a given token (destroying token)

## Links
+ PrivateRoute: https://emp-app-prod.herokuapp.com/ - displaying information of the department employees only after department is logged in. Only seen for logged departments 
+ https://emp-app-prod.herokuapp.com/#/login - Login page
+ https://emp-app-prod.herokuapp.com/#/register - Register page 

## Examples in Postman

### Login department 
+  POST https://emp-app-prod.herokuapp.com/api/auth/login
+ Headers: Content-type -> application/json
```    
    {
	"username": "department01",
        "password": "department01"
    }
```
+ exemplary output
```
{
    "user": {
        "id": 1,
        "username": "department01",
        "email": "department01@gmail.com"
    },
    "token": "TOKEN_PARA"
}
``` 

### Checking token and loading department
+ GET https://emp-app-prod.herokuapp.com/api/auth/department
+ Headers: Authorization -> Token TOKEN_PARA
+ output
```
{
    "id": 1,
    "username": "department01",
    "email": "department01@gmail.com"
}
```

### Listing employees of given department using its valid token
+ GET https://emp-app-prod.herokuapp.com/api/employees/
+ Headers: Authorization -> Token TOKEN_PARA
+ output
```
[
    {
        "employee_id": 2,
        "name": "Magda",
        "surname": "Fry",
        "email": "magfry@gmail.com",
        "created_at": "2019-11-30T00:55:42.516781Z",
        "owner": 1
    },
    {
        "employee_id": 1,https://emp-app-prod.herokuapp.com/api/employees/
        "name": "Anna",
        "surname": "Krawczyk",
        "email": "anna@gmail.com",
        "created_at": "2019-11-30T00:55:22.743691Z",
        "owner": 1
    }
]
```

### Adding employee
+ POST https://emp-app-prod.herokuapp.com/api/employees/
+ Headers: Authorization -> Token TOKEN_PARA
+ Headers: Content-type -> application/json
```
   {
        "name": "Bartosz",
        "surname": "Walas",
        "email": "walasy@gmail.com"
    }
```
+ output
```
{
    "employee_id": 7,
    "name": "Bartosz",
    "surname": "Walas",
    "email": "walasy@gmail.com",
    "created_at": "2019-12-01T14:06:32.325699Z",
    "owner": 1
}
```
+ Now we can check the list of employees to check if the employee was added to the given department
```
[
    {
        "employee_id": 7,
        "name": "Bartosz",
        "surname": "Walas",
        "email": "walasy@gmail.com",
        "created_at": "2019-12-01T14:06:32.325699Z",
        "owner": 1
    },
    {
        "employee_id": 2,
        "name": "Magda",
        "surname": "Fry",
        "email": "magfry@gmail.com",
        "created_at": "2019-11-30T00:55:42.516781Z",
        "owner": 1
    },
    {
        "employee_id": 1,
        "name": "Anna",
        "surname": "Krawczyk",
        "email": "anna@gmail.com",
        "created_at": "2019-11-30T00:55:22.743691Z",
        "owner": 1
    }
]
```

### Deleting employee
+ DELETE https://emp-app-prod.herokuapp.com/api/employees/2/
+ Headers: Authorization -> Token TOKEN_PARA
+ Headers: Content-type -> application/json
+ Now we can check the list of employees to check if the employee was deleted from the given department
```
[
    {
        "employee_id": 7,
        "name": "Bartosz",
        "surname": "Walas",
        "email": "walasy@gmail.com",
        "created_at": "2019-12-01T14:06:32.325699Z",
        "owner": 1
    },
    {
        "employee_id": 1,
        "name": "Anna",
        "surname": "Krawczyk",
        "email": "anna@gmail.com",
        "created_at": "2019-11-30T00:55:22.743691Z",
        "owner": 1
    }
]
```

### Registering department 
+ POST https://emp-app-prod.herokuapp.com/api/auth/register
+ Headers: Content-type -> application/json
```
{
	"username": "department04",
	"email": "department03@gmail.com",
	"password": "department04",
	"token": "AuthToken.objects.create(user)"
}
```
+ output
```
{
    "user": {
        "id": 4,
        "username": "department04",
        "email": "department03@gmail.com"
    },
    "token": "TOKEN_PARA"
}
```