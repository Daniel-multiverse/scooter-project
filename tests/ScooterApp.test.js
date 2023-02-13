const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('Test Scooterapp and user works together', () => {
    test(() => {
      app = new ScooterApp();
      user1 = new User('Daniel', 'Password', 23);
      user2 = new User('James', 'String', 90);
      scooter1 = new Scooter('London', 'Daniel');
      scooter2 = new Scooter('Liverpool', 'James');
    });

      
    test('Check scooterApp object instance', () => {
        expect(app).toBeInstanceOf(ScooterApp);
      });


  test('Sscooter has correct properties', () => {
    expect(stations && typeof target === 'object').toBe(true)
    expect(registeredUSers && typeof registeredUSers === 'object').toBe(true)
   });





})
