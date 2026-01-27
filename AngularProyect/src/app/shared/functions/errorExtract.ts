export function errorExtract(obj: any): string[]{
    const err = obj.error.errors;

    let messageError: string[] = [];

    for (let key in err){
        let field = key;
        const messageWithFields = err[key].map((message:string) => `${field}: ${message}`);
        messageError = messageError.concat(messageWithFields);
    }

    return messageError;
}