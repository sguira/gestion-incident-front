import { Component, Pipe } from '@angular/core';
import {  Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { AddTicketComponent } from '../add-ticket/add-ticket.component';
import { ServiceService } from 'src/app/service/service.service';
import { Ticket } from 'src/app/model/Ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {


  tickets:Array<Ticket>=this.service.getTickets();
  nameSearch:String="chercher un nom"


  constructor(public navigate:Router,private dialog:MatDialog,public service:ServiceService){}

  currentType="Tous"


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  btnAddTicket(){
    this.dialog.open(AddTicketComponent)
  }

  onSearch(name:String){
    if(name.length>=3){
     this.tickets= this.service.searchService(name)
     console.log(this.tickets)
    }
    else{
      this.tickets=this.service.getTickets()
    }
  }

  onFocus(text:string){
    this.currentType=text;
  }

}
