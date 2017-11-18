/*global*/

//
var carRental = {
    name: "Enterprise Car Rental",
    TypesAvailable: [{ type: "Economy", numAvailable: 5, numRented: 0, price:200},
        { type: "Midsize", numAvailable: 5, numRented: 0, price: 500 }
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

var Rental = {
    Renter:[{firstName: "Samir", lastName:"Hakim", carType: "Midsize", price:"100"}, 
            {firstName: "Aliya", lastName:"Winter", carType:"Economy", price:"300"},
            {firstName: "Dina", lastName: "Meder", carType:"Midsize", price:"200"}
           ]
}

document.getElementById("businessName").innerHTML = carRental.name;



function updateInfo(){
    document.getElementById("econNum").innerHTML = carRental.getAvailability().EconomyCarsNum;
    document.getElementById("econCar").innerHTML = carRental.TypesAvailable[0].type;
    document.getElementById("midNum").innerHTML = carRental.getAvailability().MidsizeCarsNum;
    document.getElementById("midCar").innerHTML = carRental.TypesAvailable[1].type;

}

function submitForm(){
    var newCarType;
    var newPrice;
    if ((document.getElementById("qCarType").value="Midsize")== true){
        carRental.rentMid();
        newCarType ="Midsize";
        newPrice = 1000;
    }
    if ((document.getElementById("qCarType").value="Economy")== true){
        carRental.rentEcon();
        newCarType = "Economy";
        newPrice = 500;
    }
    
    var newFirstName = document.getElementById("qFirstName").value();
    var newLastName =document.getElementById("qLastName").value();
   
    Rental.Renter.push({firstName: newFirstName, lastName: newLastName, carType: newCarType, price: newPrice});
    console.log(Rental.Renter);
}





