const {faker} = require('@faker-js/faker');
const express = require("express");

const app = express();
const port = 8000;
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.json({message: 'Hello, World!'});
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

class User{
    constructor(){
        this.userId = faker.datatype.uuid();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.email = faker.internet.email();
        this.phone_number = faker.phone.number();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.companyId = faker.datatype.uuid();
        this.name = faker.name.jobArea();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    res.json(new User());
})
app.get('/api/companies/new', (req, res) => {
    res.json(new Company());
})
app.get('/api/user/company', (req, res) => {
    const info = [new User(),new Company()]
    res.json(info);
})


// (*/ω＼*) Winter Wasn't here, I'm just s-string posting.
