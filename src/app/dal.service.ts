import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DALService {
  url:string;

  constructor( private httpClient:HttpClient) { 

    this.url = "http://localhost:53578/api/Employees/";
  }

 GetEmployeeData():Observable<Employee[]>{
    
  
   return this.httpClient.get<Employee[]>(this.url);

 
 }
PostEmployeeData(employee:Employee):Observable<Employee>{

  return this.httpClient.post<Employee>(this.url,employee);
}

DeleteEmployee(id:number):Observable<any>{

  return this.httpClient.delete<any>(this.url+id);
}


PutEmployeeData(id:number):Observable<Employee>{

  return this.httpClient.put<Employee>(this.url,id);
}


//  async fetchData(employee:Employee){
//   const data = await this.httpClient.post(this.url,employee).toPromise();
//   console.log("Data: " + JSON.stringify(data)); 
// }


}
