/*global*/

//
var carRental = {
    name: "Enterprise Car Rental",
    TypesAvailable: [{ type: "Economy", numAvailable: 5, numRented: 0},
        { type: "Midsize", numAvailable: 5, numRented: 0 }
    ],
    getAvailability: function() {
        
        var EconomyCarsNum = this.TypesAvailable[0].numAvailable - this.TypesAvailable[0].numRented;
        var MidsizeCarsNum = this.TypesAvailable[1].numAvailable - this.TypesAvailable[1].numRented;
        return {EconomyCarsNum: EconomyCarsNum, MidsizeCarsNum: MidsizeCarsNum};
    },
    
    rentEcon: function(){
       if (this.TypesAvailable[0].numAvailable<=0){
       document.getElementById("econNum").innerHTML = "Sorry there are no economy cars available at this time.";
       }
       else if (this.TypesAvailable[0].numAvailable>0){
       this.TypesAvailable[0].numAvailable--;
       updateInfo();
       }
    },
    
    rentMid: function(){
        if (this.TypesAvailable[1].numAvailable<=0){
       document.getElementById("midNum").innerHTML = "Sorry there are no midsize cars available at this time.";
       }
       else if (this.TypesAvailable[1].numAvailable>0){
       this.TypesAvailable[1].numAvailable--;
       updateInfo();
       }
    //  this.TypesAvailable[1].numRented++;
    // updateInfo();
    },
    returnEcon: function(){
          this.TypesAvailable[0].numAvailable++;
    updateInfo();
    },
    
    returnMid: function(){
     this.TypesAvailable[1].numAvailable++;
     updateInfo();
    }
};

document.getElementById("businessName").innerHTML = carRental.name;

function updateInfo(){
    document.getElementById("econNum").innerHTML = carRental.getAvailability().EconomyCarsNum;
    document.getElementById("econCar").innerHTML = carRental.TypesAvailable[0].type;
    document.getElementById("midNum").innerHTML = carRental.getAvailability().MidsizeCarsNum;
    document.getElementById("midCar").innerHTML = carRental.TypesAvailable[1].type;

}
