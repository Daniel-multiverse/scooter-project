class Scooter{
  constructor(station ){
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial
    Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }


  // checks the sccoter is in good condition first then allows user to rent scooter
  rent(){
    if (charge > 20 && isBroken === false){
      station = null
    } else if (charge < 20){
      throw new Error("scooter needs to charge")
    } else if (isBroken === true){
      throw new Error("scooter needs repair")
    }
    return "Enjoy :D"
    }


    // sets station to prop to the inputted new station
    // error handling if input is blank
    dock(input){
      if (!input) throw new Error('Docking station required!');
      this.station = input;
      this.user = null;
      return 'Scooter has been docked successfully.';
    }


    // after two seconds charge is set to 100
    async recharge() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.charge = 100;
  
      return 'Scooter has been charged successfully.';
    }

    // after two seconds the scooter is fixed
    async requestRepair() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.isBroken = false;
  
      return 'Scooter has been repaired successfully.';
    }


  }





module.exports = Scooter


// This class represents the individual scooters that users will rent from stations. A Scooter is either docked at a station or checked out to a User. Scooters can also be broken or need charging.

// Each Scooter should have the following properties

// station: string; the station the scooter is located at, or null if checked out

// user: the User who checked out the Scooter, or null if docked

// serial: a number assigned sequentially from nextSerial

// nextSerial: a static number which starts at 1 and increments each time a new serial number is assigned

// charge: a number from 0 (no charge at all) to 100 (fully charged)

// isBroken: boolean

// All Scooters are docked, charged, and in good repair initially. The Scooter constructor has one parameter: 

// the Station the scooter is docked at. 

// Your constructor must initialize all of the other properties, too.

// Each Scooter should have the following methods

// rent()

// If the Scooter is charged above 20% and not broken, remove it from its station, check it out to user. 

// Otherwise, throw an error scooter needs to charge or scooter needs repair.

// dock(station)

// Return the scooter to the station. Be sure to clear out the user, so they don’t get charged unfairly!

// recharge()

// BONUS: Set a timer to incrementally update the Scooter’s charge to 100. 

// Every so often, log the new percentage of charge.

// requestRepair()

// BONUS: Use a setInterval timer to schedule a repair in 5 seconds.

// When time elapses, set isBroken to false and log repair completed to the console.

// NOTE: Section 5 has starter code for a setInterval timer that can be used with the recharge() and requestRepair() methods.