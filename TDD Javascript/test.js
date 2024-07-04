// install in project location: npm install --save-dev mocha
// run: npx mocha test.js


const assert = require('assert');
const dateGenerator = require('./hello');
describe("dateGenerator", ()=>{
  it("should return current day", ()=>{

    const generatedDate = dateGenerator();
    const currentDate = new Date();
    assert.equal(generatedDate.toDateString(), currentDate.toDateString());
  });
});