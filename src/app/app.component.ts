import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIResponse, Customer } from './model/train';
import { FormsModule } from '@angular/forms';
import { TrainService } from './service/train.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'Railway-App';

  registerObj: Customer = new Customer();
  trainService = inject(TrainService);
  loginObj: any = {
    phone: '',
    passenger: '',
  };
  loggedUser: Customer = new Customer();
  constructor() {
    const localData = localStorage.getItem('TrainApp');
    if(localData != null){
    this.loggedUser = JSON.parse(localData);
  }
  }
  onRegister() {
    this.trainService
      .createNewCustomer(this.registerObj)
      .subscribe((res: APIResponse) => {
        if (res.result) {
          alert('registration successfull');
        } else res.message;
      });
  }
  onLogin() {
    this.trainService.onLogin(this.loginObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('login successfull');
        localStorage.setItem('trainApp', JSON.stringify(res.data));
        this.loggedUser = res.data;
      } else {
        alert(res.message);
      }
    });
  }

  openRegister() {
    const model = document.getElementById('registerModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  openLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  closeRegister() {
    const model = document.getElementById('registerModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }
  closeLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }
  logOut() {
    this.loggedUser = new Customer();
    localStorage.removeItem('TrainApp');
  }
}
