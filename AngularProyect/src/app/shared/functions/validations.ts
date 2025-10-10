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

export function dateCantBeFuture():ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        const userDate = new Date(control.value);
        const today = new Date();

        if(userDate > today){
            return{
                future:{
                    message: 'the date cant be in the future'
                }
            }
        }
        return null;
    }
}