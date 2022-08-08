import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  img1= 'assets/dryfruits.jpg'
  img2='assets/fruits.jpg'
  img3='assets/proteins.jpg'
  img4='assets/vegetables.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
