import { Component, OnInit } from '@angular/core';
import { DALService } from '../dal.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
    export class EmployeesComponent implements OnInit {

  empobj:Employee[]=[];
  
emp:Employee= new Employee();
newEmployee:Employee = new Employee();
editEmployee:Employee = new Employee();
constructor(private dal:DALService) { 
  }
 
  ngOnInit(): void {
 
  this.BindEmployeeData();
  }

  public BindEmployeeData() {
    this.dal.GetEmployeeData().subscribe(

      (resp: Employee[]) => {
        this.empobj = resp;
      }
    );
  }

  onsubmit(){
    alert(123);
    debugger;
   
    this.dal.PostEmployeeData(this.newEmployee).subscribe(
     ()=> {
      this.BindEmployeeData();
  }
    
     )
  }

  onEdit(id:number, index:number){

debugger;

this.editEmployee.name =this.empobj[index].name;
this.editEmployee.salary =this.empobj[index].salary;
this.editEmployee.age =this.empobj[index].age;
debugger;
  }

  
  onDelete(id:number){
this.dal.DeleteEmployee(id).subscribe(
  ()=> {
    this.BindEmployeeData();
}
  )

    console.log("Event: ",id);
      }

      onUpdate(id:number)
      {
        debugger;
        this.dal.PutEmployeeData(17).subscribe(
          ()=>{
            this.BindEmployeeData();
          }
        )
      }




}
