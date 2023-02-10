const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object

describe("scooter instance integrity checks", ()=>{
  const scooter = new Scooter ("London")

test('instance has correct properties', () => {
  expect(scooter).toHaveProperty("user", null)
  expect(scooter).toHaveProperty("charge")
  expect(scooter).toHaveProperty("serial")
  expect(typeof scooter.isBroken).toBe("Boolean")
  expect(scooter.station).toBe("London")
});

test('instance static value incrementing', () => {
  const scooter2 = new Scooter("Wirral")
  expect(scooter2.serial).toBe(scooter.serial + 1)
});

})




