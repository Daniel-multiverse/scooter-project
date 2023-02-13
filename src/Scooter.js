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


    // sets station  prop to the inputted station
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


