import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiEndPoint:string = 'http://localhost:8080'

  constructor(private http:HttpClient) { } 

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiEndPoint}/employee/all`);
  }

  public addEmployees(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiEndPoint}/employee/add`,employee);
  }

  public updateEmployees(employee:Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiEndPoint}/employee/update`,employee);
  }

  public deleteEmployees(employeeId:number): Observable<void> {
    return this.http.delete<void>(`${this.apiEndPoint}/employee/delete/${employeeId}`);
  }
}
