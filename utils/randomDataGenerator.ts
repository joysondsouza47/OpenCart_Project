import {faker, fakerEN_IN, fakerTA_IN} from "@faker-js/faker"

export class RandomDataUtil
{
    static getRandomFirstName()
    {
        return faker.person.firstName();
    }
    static getRandomLastName()
    {
        return faker.person.lastName();
    }
    static getRandomFullName()
    {
        return faker.person.fullName();
    }
    static getRandomEmail()
    {
        return faker.internet.email();
    }
    static getRandomPhoneNumber()
    {
        return faker.phone.number();
    }
    static getRanPassword()
    {
        return faker.internet.password();
    }
    static getRandomCountry()
    {
        return faker.location.country();
    }
    static getRandomState()
    {
        return faker.location.state();
    }
    static getRandonCity()
    {
        return faker.location.city();
    }
    static getRandomZipcode()
    {
        return faker.location.zipCode();
    }
    static getRandomAddress()
    {
        return fakerEN_IN.location.streetAddress();
    }
    static getRandomPassword(length:number = 10):string
    {
        return faker.internet.password({length});
    }
    static getRandomAlphanumeric(length:number):string
    {
        return faker.string.alphanumeric(length);
    }
    static getRandomNumber(length:number):string
    {
        return faker.string.numeric(length);
    }
     static getRandomUUID():string
    {
        return faker.string.uuid()
    }
}