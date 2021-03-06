const uuid = require('uuid')
const faker = require('faker')

module.exports = {
    uuid: () => uuid.v4(),
    date: () => (new Date()).toISOString(),
    integer: () => Math.round(Math.random()*100),
    number: () => Math.random()*100,
    name: () => faker.name.firstName(),
    surname: () => faker.name.firstName(),
    boolean: () => Math.random() > 0.5? true: false,
    string: () => faker.name.jobTitle(),
    link: () => faker.internet.url(),
    year: () => (new Date()).getFullYear()
}