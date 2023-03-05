
# API-REST Yemicelemat

 REST API for the company Yemicelemat, with the functions of a CRUD for the services offered by the company.


## Tech Stack

**Client:** React, Bootstrap, React-Bootstrap, Webpack, Sass 
  - [Repository Client](https://github.com/GeovannyPaez/yemicelemat-client)

**Server:** Node, Express, Sequelize, PostgresSQL
 

## Features

- Auth Local and JWT (JsonWebToken)
- CRUD of Receipts 
- Recovery Password 
- User creation 


## API Reference


### Auth

#### Login 

```http
  POST /api/v1/auth/login
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | must be format e-mail      |  
| `password`| `string` | min length 6|

#### Recovery password

```http
  POST /api/v1/auth/recovery
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. must be format e-mail   |

#### Change Password

```http
  POST /api/v1/auth/change-password
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string`   | **Required** jsonwebtoken|
| `newPassword` | `string` | **Required** min length 6 |

### Receipts  
### Categories 
#### giros
| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` | 
| `value`| `number` | 
| `comicion`| `number` | 
| `nameRemitente`| `string` | 
| `nameReceptor`| `string` | 
| `ccRemitente`| `number` | 
| `ccReceptor`| `number` | 
| `entidad`| `string` | 
| `destino`| `string` | 
| `numPhone`| `number` | 
| `userId`| `number` | 


#### celular 

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` | 
| `value`| `number` | 
| `comicion`| `number` |
| `operador`| `string` |
| `numPhone`| `number` |

#### consignaciones

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` | 
| `value`| `number` | 
| `comicion`| `number` |
| `numAccount`| `number` |
| `typeAccount`| `string` |
| `cc`| `number` |
| `name`| `string` |
| `bench`| `string` |
| `numPhone`| `number` |

#### venezuela

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` | 
| `value`| `number` | 
| `comicion`| `number` | 
| `nameRemitente`| `string` | 
| `nameReceptor`| `string` | 
| `ccRemitente`| `number` | 
| `ccReceptor`| `number` | 
| `typeDocument`| `string` | 
| `typeAccount`| `string` | 
| `numAccount`| `number` | 
| `bench`| `string` | 
| `destino`| `string` | 
| `numPhone`| `number` | 
 
#### freefire

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` | 
| `value`| `number` | 
| `comicion`| `number` | 
| `idFreefire`| `number` | 
| `numPhone`| `number` | 

####  retiros

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` |
| `bench`| `string` |
| `totalReceived`| `number` |
| `totalDelivered`| `number` |
| `numberReceipt`| `number` |

#### pines 

| Properties     | Type     | 
| :-------- | :------- | 
| `id`   | `number` |  
| `typeReceipt`| `string` |
| `userId`| `number` | 
| `state`| `boolean` | 
| `urlVoucher`| `string` | 
| `date`| `Date` |
| `value`| `number` | 
| `comicion`| `number` | 
| `email`| `string` | 
| `numPhone`| `number` | 
| `entidad`| `string` | 
| `name`| `string` | 

#### Get all receipts by category

```http
  GET /api/v1/${category}
```


| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `category` | `string`| **Required**. loged with jwt | barrer jwt |

##### Query Parameters     

| Parameter | Type     | Description |               
| :-------- | :------- | :-----------|
|   `complete` | `boolean`| return receipts completed or not completed|
|   `dateInitial` | `Date`| return receipts by date, **Required** dateEnd|
|   `dateEnd` | `Date`| return receipts by date, **Required** dateInitial|


#### Get one receipt by category 

```http
  GET /api/v1/${category}/${id}
```

| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `category` | `string`| **Required**. loged with jwt | barrer jwt |
| `id` | `number`| **Required**. loged with jwt | barrer jwt |

#### Updated Receipt
```http
  PUT Or PATCH /api/v1/${category}/${id}
```

| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `category` | `string`| **Required**. loged with jwt | barrer jwt |
| `id` | `number`| **Required**. loged with jwt | barrer jwt |

#### Create Receipt

```http
   POST /api/v1/${category}/${id}
```

- Regarding which category you are going to create the receipt, you must send the properties required by that category in the **body** of the request, excluding the properties: **id** and **date**.

| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `category` | `string`| **Required**. loged with jwt | barrer jwt |
| `id` | `number`| **Required**. loged with jwt | barrer jwt |
 
#### Delete Receipt
```http
  DELETE /api/v1/${category}/${id}
```

| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `category` | `string`| **Required**. loged with jwt | barrer jwt |
| `id` | `number`| **Required**. loged with jwt | barrer jwt |

### User 

#### Get all Users 

```http 
  GET /api/v1/users
```

Needs to be authenticated with the received token at the time of logging in.


- Example 
```javascript 
  let headersList = {
 "Accept": "*/*",
 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiYWRtaW4iOnRydWUsImlhdCI6MTY3NTYyMzY1MCwiZXhwIjoxNjc1NzEwMDUwfQ.zntegoxGSxxhWdUvvdaSKhZuZ4YWUAy5EBpPfrQvwYY"
}
const dominio = 'http://localhost:3000';

let response = await fetch( dominio + "/api/v1/users", { 
  method: "GET",
  headers: headersList
});

let data = await response.text();
console.log(data);

```
#### Get all receipts created by  Users

```http 
  GET /api/v1/users/receipts
```

Needs to be authenticated with the received token at the time of logging in.


#### Get one User

```http 
  GET /api/v1/users/${userId}
```

| Parameter | Type     | Description                |     Auth |
| :-------- | :------- | :------------------------- | :---|
| `userId` | `number`| **Required**. loged with jwt | barrer jwt |

#### Create User

```http 
  POST /api/v1/users/${userId}
```
- ** Note**: Only the Admin User can create users, that is, if the token that is sent contains the information of a user with the admin role, you can create that user.
#### Body:

| Properties | Type     |
| :-------- | :------- | 
| `email` | `string`|
| `nickname` | `string`|
| `password` | `string`|

- example: 

```javascript 
 let headersList = {
 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTY3MTc2OTE0MCwiZXhwIjoxNjcxODU1NTQwfQ.d0euPj32IJGp2rsOs7sBDCZjXHtPKjBeBhUSDE8cY4U",
 "Content-Type": "application/json"
}

(async ()=>{
  let bodyContent = JSON.stringify({
  "email":"lorean@gmail.com",
  "nickname":"Geovanny Paez",
  "password":"admin123"
});

const dominio = 'https://example.com';

let response = await fetch(dominio+"/api/v1/users/", { 
  method: "POST",
  body: bodyContent,
  headers: headersList
});

let data = await response.text();
console.log(data);
})();


```

