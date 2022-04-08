import { Component, OnInit } from '@angular/core';
import { CientificsServiceService, ICientific } from 'src/app/Services/cientifics-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cientific',
  templateUrl: './cientific.component.html',
  styleUrls: ['./cientific.component.css']
})
export class CientificComponent implements OnInit {

  isDark:boolean=true;
  cientificList:ICientific[]=[];

  constructor(private CientificsService:CientificsServiceService, private router:Router) {
    this.GetAllCientifics();
  }

  showDetails(idSend:number){
    this.router.navigate(['/cientificdetail'],{queryParams:{id:idSend}});
  }

  FilterByGenre(genre:string){
    this.cientificList = this.CientificsService.getCientificsByGenre(genre);
  }

  GetAllCientifics(){
    this.cientificList =  this.CientificsService.getCientifics();
  }

  ngOnInit(): void {
  }

}
