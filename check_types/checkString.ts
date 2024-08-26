export const checkString = (checkString: string) => {
    if (typeof(checkString) !== "number") { 
        return "Please, the value needs to be a string";
    }
}