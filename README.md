# itelect2-project
My IT Elective 2 backend web development project.


## API Testing

### GET Tasks
![GET Tasks](screenshots/GET200.png) 
![GET Tasks](screenshots/GET500.png)

### POST Tasks
![POST Tasks](screenshots/POST400.png) 
![POST Tasks](screenshots/POST201.png)

### PUT Tasks
![PUT Tasks](screenshots/PUT200.png) 
![PUT Tasks](screenshots/PUT404.png)

### DELETE Tasks
![DELETE Tasks](screenshots/DELETE200.png) 
![DELETE Tasks](screenshots/DELETE404.png)


## GT8 - PostgreSQL and Sequelize Testing

### GET Tasks with User (JOIN)

![GET Tasks with User](screenshots/GT8_GET_TASKS_200.png)

### GET One Task

![GET One Task](screenshots/GT8_GET_TASK_200.png)

### GET Task Not Found

![GET Task Not Found](screenshots/GT8_GET_TASK_404.png)

### GET Users

![GET Users](screenshots/GT8_GET_USERS_200.png)

### POST Task Created

![POST Task Created](screenshots/GT8_POST_TASK_201.png)

### POST Task Validation Error

![POST Task Validation Error](screenshots/GT8_POST_TASK_400.png)

### PUT Task Updated

![PUT Task Updated](screenshots/GT8_PUT_TASK_200.png)

### POST Task Not Found

![PUT Task Not Found](screenshots/GT8_POST_TASK_400.png)

### DELETE Task

![DELETE Task](screenshots/GT8_DELETE_TASK_200.png)

### DELETE Task Not Found

![DELETE Task Not Found](screenshots/GT8_DELETE_TASK_404.png)

### PostgreSQL Tables

![Users Table](screenshots/USERS_TABLE.png)

![Tasks Table](screenshots/TASKS_TABLE.png)



## GT9 - Password Hashing and JWT Login

### Successful Registration — 201

![Successful registration](screenshots/GT9_REGISTER_201.png)

### Duplicate Email — 409

![Duplicate email](screenshots/GT9_REGISTER_409.png)

### Short Password — 400

![Short password](screenshots/GT9_REGISTER_SHORT_400.png)

### Invalid Email — 400

![Invalid email](screenshots/GT9_REGISTER_EMAIL_400.png)

### Registration Ignores Admin Role

![Submitted admin role defaults to member](screenshots/GT9_REGISTER_ROLE_MEMBER.png)

### Successful Login — 200

![Successful login with JWT](screenshots/GT9_LOGIN_200.png)

### Wrong Password — 401

![Wrong password](screenshots/GT9_LOGIN_WRONG_401.png)

### Unknown Email — 401

![Unknown email](screenshots/GT9_LOGIN_UNKNOWN_401.png)

### Hashed Passwords and User Roles

![Hashed passwords and admin and member roles](screenshots/GT9_USERS_HASHED.png)

### Tasks with Users Without Password Fields

![Task JOIN response without password fields](screenshots/GT9_TASKS_NO_PASSWORD.png)