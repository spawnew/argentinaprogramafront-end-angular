import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {



  public educations:Educacion[]=[];
  constructor(private  educacionService : EducacionService) { }

  ngOnInit(): void {
    this.getEducations();
  }
public getEducations():void{

  this.educacionService.getEducacion().subscribe({
    next:(Response:Educacion[])=>{
      this.educations=Response;

    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
}
}
