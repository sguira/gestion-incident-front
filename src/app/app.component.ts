import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-gestion-incident2';

  isAuth:boolean=false;
  constructor(public authService:AuthService){
    if(this.authService.getId()){

    }
    else{
      this.isAuth=false;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.authService.deleteId()
    this.authService.deleteRole()
  }
}
