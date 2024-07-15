import Entry from "./entry.mjs";

class OurData{
    constructor(){
        this. enteredDataArray=[];
    }
    addPatient(fullID, fullName, fullGender,fullBirthdate ){
        this.enteredDataArray.push(new Entry(fullID, fullName, fullGender,fullBirthdate));
        return this.enteredDataArray;
    }
    deletePatient(myID){
        for(let index=0;index< this.enteredDataArray.length;index++){

            if(this.enteredDataArray[index].id===myID){
                this.enteredDataArray.splice(index,1);
        }
        }
    }
   
    display(some){   //callback
        console.log(some);
    }

    fetchPatientData (fullID,myCallBack){
        
        setTimeout(()=>{
            for(let index=0; index<this.enteredDataArray.length;index++){
                if(this.enteredDataArray[index].id===fullID){
                    myCallBack(this.enteredDataArray[index])  ;
                }
            }
        },2000)
        
        
    }

    processPatientData (fullID){
        this. thisYear=new Date().getFullYear();
        this. birthYear=0;
                this.age=0;
                
        
        for(let index=0;index<this.enteredDataArray.length;index++){
            if(this.enteredDataArray[index].id===fullID){
                
              this. birthYear=new Date(this.enteredDataArray[index].birthdate).getFullYear();
                 this.age=this.thisYear-this.birthYear;
                
            }
            
            
        }
        return `age: ${this.age}`;

    }
}

function main(){
    let myData=new OurData();
    myData.addPatient(1,"ELISHA BANTANA", "M", "1994-01-20");
    myData.addPatient(2,"JOYCE KIM", "F", "1990-10-11");
    myData.addPatient(3,"JOHN DOE", "M", "2003-04-28");
    myData.deletePatient(1);
    myData.fetchPatientData(3,myData.display);
    console.log(myData.processPatientData(3)); 
}

main();