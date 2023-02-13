const User = require('../src/User')


describe("User instance integrity checks", ()=>{
    const user1 = new User ("Daniel", "password", 20)
  
  test('instance has correct properties', () => {
   expect(user1.username).toBe("Daniel")
   expect(user1.password).toBe("password")
   expect(user1.age).toBe(20)

  });
  
  })
  




