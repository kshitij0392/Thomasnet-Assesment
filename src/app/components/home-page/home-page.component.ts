import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: Array<any> = [];
  current:any;
  max:any;
  color:any;
  leftImg:String = './assets/ico-arrow-left-gray.png';
  rightImg: String = './assets/ico-arrow-right-gray.png';
    constructor() { 
      this.items = [
        {
          name: 'assets/ico-bulb.png',
          id: 1
        },
        {
          name: 'assets/ico-bulb.png',
          id: 2
        },
        {
          name: 'assets/ico-bulb.png',
          id: 3
        },
        {
          name: 'assets/ico-bulb.png',
          id: 4
        },
        {
          name: 'assets/ico-bulb.png',
          id: 5
        },
        {
          name: 'assets/ico-bulb.png',
          id: 6
        },
        {
          name: 'assets/ico-bulb.png',
          id: 7
        },
        {
          name: 'assets/ico-bulb.png',
          id: 8
        },
        {
          name: 'assets/ico-bulb.png',
          id: 9
        },
        {
          name: 'assets/ico-bulb.png',
          id: 10
        },

      ]
      this.current = 80;
      this.max = 100;
      this.color= '#f7f7f7';
    }
    
    mouseOnLeft(){
      this.leftImg = "./assets/ico-arrow-left-red.png";
    }
    mouseLeaveLeft(){
      this.leftImg = "./assets/ico-arrow-left-gray.png"
    }

    mouseOnRight(){
      this.rightImg = "./assets/ico-arrow-right-red.png";

    }

    mouseLeaveRight(){
      this.rightImg = "./assets/ico-arrow-right-gray.png"
    }

  ngOnInit() {
  }

}
