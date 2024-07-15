export default class Entry{
    constructor(id, name, gender, birthdate){
        this.id=id;
        this.name=name;
        this.gender=gender;
        this.birthdate=birthdate;
    }

    get getDetails(){
        return `ID: ${this.id}, NAME: ${this.name}, GENDER: ${this.gender}, BIRTHDATE: ${this.birthdate}`;
    }


    set setId(newID){
        this.id=newID;
    }
    
    set setName(newName){
        this.name=newName;
    }
    
    set setGender(newGender){
        this.gender=newGender;
    }

    set setBirthdate(newBirthdate){
        this.birthdate=newBirthdate;
    }

}
