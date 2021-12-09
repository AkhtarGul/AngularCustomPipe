import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  firstName = 'Ahmad';
  midName = 'Qasam';
  lastName = 'Khan';
  fullName = {
    fName: 'Ahmad',
    mName: 'Qasam',
    lName: 'Khan',
  };
  nameSearch: string = '';
  todayDate = new Date();
  productArray = [
    { sNo: 1, proName: 'Mobile', price: 120, available: 'Available' },
    { sNo: 2, proName: 'Laptop', price: 300, available: 'Available' },
    { sNo: 3, proName: 'Desktop', price: 230, available: 'Available' },
    { sNo: 4, proName: 'Tv', price: 430, available: ' Not Available' },
  ];
  addProduct(product) {
    console.log(product.value);
    this.productArray.push({
      sNo: 5,
      proName: product.value,
      price: 500,
      available: 'Available',
    });
  }
}
