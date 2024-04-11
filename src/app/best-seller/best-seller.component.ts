// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-best-seller',
//   standalone: true,
//   imports: [],
//   templateUrl: './best-seller.component.html',
//   styleUrl: './best-seller.component.scss'
// })
// export class BestSellerComponent {

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
