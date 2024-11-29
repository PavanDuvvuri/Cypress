
let { uniqueNamesGenerator, names } = require('unique-names-generator');
let randomLorem = require('random-lorem');
// let randomMobile = require('random-mobile');
// let rug = require('random-username-generator');

class RandomGenerator {

    getRandomName() {
        const config = {
            dictionaries: [names]
        }
        return uniqueNamesGenerator(config);
    }

    getRandomEmail() {
        return randomLorem({ length: 12 }) + '@automation.com';
    }
    // getGenerateRandomNumber() {
    //     return Math.floor(Math.random() * 20) + 10
    // }
    // getGenerateRandomNum() {
    //     return Math.floor(Math.random() * 2000) + 1000
    // }
    // getrandom_value() {
    //     var values = [true, false];
    //     return values[Math.floor(Math.random() * values.length)];
    // }
    // getrandom_detail() {
    //     var random_detail = ["1x2"];
    //     return random_detail[Math.floor(Math.random() * random_detail.length)];
    // }

    getRandomUserName() {
        rug.setSeperator('_');
        return rug.generate();
    }
    // getrandom_state() {
    //     var random_state = ["SCHEDULED", "IN_PLAY", "COMPLETED"];
    //     return [Math.floor(Math.random() * random_state.length)];
    // }
    // getrandom_subcat() {
    //     var random_subcat = [true, false];
    //     return [Math.floor(Math.random() * random_subcat.length)];
    // }
    // async generateRandomString() {
    //     return Math.random().toString(36).substring(2, 11)
    // }

    // async getRandomMobile(formatted) {
    //     if (formatted) {
    //         return randomMobile({ formatted: true });
    //     } else {
    //         return randomMobile();
    //     }
    // }

    // async getRandomAlphanumericString(len) {
    //     let p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //     return [...Array(len)].reduce(a => a + p[~~(Math.random() * p.length)], '');
    // }

    // genrateRandomNumberOfFixedDigit(len){
    //     let p = "123456789";
    //     return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
    // }

    // genrateRandomNumberBetween(min, max){
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

}

module.exports = new RandomGenerator();