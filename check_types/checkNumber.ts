export const  checkNumber = (checkNumber : number) => {
    if (typeof(checkNumber) !== "number") { 
        return "Please, the value needs to be a number";
    }
}