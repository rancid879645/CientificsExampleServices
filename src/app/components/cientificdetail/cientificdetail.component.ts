import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CientificsServiceService, ICientific } from 'src/app/Services/cientifics-service.service';



@Component({
  selector: 'app-cientific-detail',
  templateUrl: './cientificdetail.component.html',
  styleUrls: ['./cientificdetail.component.css']
})
export class CientificDetailComponent implements OnInit {

  id:number=0;
  isDark:boolean=true;
  cientific = {} as ICientific;

  constructor(private activatedRoute:ActivatedRoute, cientificsService:CientificsServiceService) { 

    this.activatedRoute.queryParams.subscribe(
      parameters => {
        console.log(parameters);
        this.id = parameters['id'];
      }
    );

    this.cientific = cientificsService.getCientificsById(this.id);
    console.log("validando datos cientific id:" + this.id + "////" + this.cientific.data);
  }

  ngOnInit(): void {
  }

}
