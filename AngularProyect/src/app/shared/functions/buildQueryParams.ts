import { HttpParams } from "@angular/common/http";

export function buildQueryParams(obj: any): HttpParams{
    let queryParams = new HttpParams();

    for(let item in obj){
        if (obj.hasOwnProperty(item)){
            queryParams = queryParams.append(item, obj[item]);
        }
    }

    return queryParams;
}