/*global*/

//
//**********************CAR RENTAL OBJECT*******************************
var carRental = {
    name: "HackStreet Car Rental",
    
    typesAvailable: [{ type: "Economy", numAvailable: 5, numRented: 0, price:1000},
        { type: "Midsize", numAvailable: 5, numRented: 0, price: 500 }
    ],
    
    currentRenters:[
            {firstName: "Samir", lastName:"Hakim", carType: "Midsize", price:"100"}, 
            {firstName: "Aliya", lastName:"Winter", carType:"Economy", price:"300"},
            {firstName: "Dina", lastName: "Meder", carType:"Midsize", price:"200"}
        ],
        
    getAvailability: function() {
        
        var EconomyCarsNum = this.typesAvailable[0].numAvailable - this.typesAvailable[0].numRented;
        var MidsizeCarsNum = this.typesAvailable[1].numAvailable - this.typesAvailable[1].numRented;
        return {EconomyCarsNum: EconomyCarsNum, MidsizeCarsNum: MidsizeCarsNum};
    },
    
    rentEcon: function(){
       if (this.typesAvailable[0].numAvailable<=0){
       document.getElementById("displayNum").innerHTML = "Sorry there are no economy cars available at this time.";
       }
       else if (this.typesAvailable[0].numAvailable>0){
       this.typesAvailable[0].numAvailable--;
       updateInfo();
       }
    },
    
    rentMid: function(){
        if (this.typesAvailable[1].numAvailable<=0){
       document.getElementById("displayNum").innerHTML = "Sorry there are no midsize cars available at this time.";
       }
       else if (this.typesAvailable[1].numAvailable>0){
       this.typesAvailable[1].numAvailable--;
       updateInfo();
       }
    //  this.TypesAvailable[1].numRented++;
    // updateInfo();
    },
    returnEcon: function(){
          this.typesAvailable[0].numAvailable++;
    updateInfo();
    },
    
    returnMid: function(){
     this.typesAvailable[1].numAvailable++;
     updateInfo();
    }
};
//*****************************WHEN PAGE LOADS************************************

document.getElementById("businessName").innerHTML = carRental.name;

//*************AFTER A CARTYPE IS PICKED IN THE DROPDOWN, DISPLAY CAR TYPE INFO***************

function showCarInfo(){
 console.log("Hello World");

    if((document.getElementById("qCarType").value == "Economy")==true){
        console.log("showCarInfo if Econ");
        document.getElementById("displayCar").innerHTML = carRental.typesAvailable[0].type;
        document.getElementById("displayNum").innerHTML = carRental.getAvailability().EconomyCarsNum;
        document.getElementById("displayPrice").innerHTML = carRental.typesAvailable[0].price;
        document.getElementById("InfoBox").style = "display:block";
    }
     if((document.getElementById("qCarType").value == "Midsize")==true){
        console.log("showCarInfo if Mid");
        document.getElementById("displayCar").innerHTML = carRental.typesAvailable[1].type;
        document.getElementById("displayNum").innerHTML = carRental.getAvailability().MidsizeCarsNum;
        document.getElementById("displayPrice").innerHTML = carRental.typesAvailable[1].price;
    }   document.getElementById("InfoBox").style = "display:block";
    
     //document.getElementById("InfoBox").setAttribute("style", "display:block");
    // document.getElementById("InfoBox").style = "display: block";
}


function updateInfo(){
//  document.getElementById("econNum").innerHTML = carRental.getAvailability().EconomyCarsNum;
//  document.getElementById("econCar").innerHTML = carRental.TypesAvailable[0].type;
//  document.getElementById("midNum").innerHTML = carRental.getAvailability().MidsizeCarsNum;
//  document.getElementById("midCar").innerHTML = carRental.TypesAvailable[1].type;

}

///***************************AFTER FORM IS SUBMITTED***************************************
function submitForm(){
    var newCarType;
    var newPrice;
    var newFirstName;
    var newLastName;
    var dropdown = document.getElementById("qCarType");
    var pickCar = dropdown.options[dropdown.selectedIndex].value;
  
    
    if (pickCar == "Midsize"){
        carRental.rentMid();
        newCarType = carRental.typesAvailable[1].type;
        newPrice = carRental.typesAvailable[1].price;
        document.getElementById("displayNum").innerHTML=carRental.getAvailability().MidsizeCarsNum;
        showCarInfo();
    }
    
    if (pickCar=="Economy"){
         console.log("rentecon");
        carRental.rentEcon();
        newCarType = carRental.typesAvailable[0].type;
        newPrice = carRental.typesAvailable[0].price;
        document.getElementById("displayNum").innerHTML=carRental.getAvailability().EconomyCarsNum;
        showCarInfo();
       
    }
    
    newFirstName = document.getElementById("qFirstName").value;
    newLastName = document.getElementById("qLastName").value;
    console.log(carRental.currentRenters);
    carRental.currentRenters.push({firstName: newFirstName, lastName: newLastName, carType: newCarType, price: newPrice});
     
}





