import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";


export function upperFirstLetter(): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = <string>control.value;

        if(!value) return null;
        if (value.length === 0) return null;

        const firstLetter = value[0];
        if(firstLetter !== firstLetter.toUpperCase()){
            return{
                upperFirstLetter:{
                    message:"the first letter must be in upper case"
                }
            }
        }
        return null;
    }
}