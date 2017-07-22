import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public lodingCtrl:LoadingController,
              public alert:AlertController) {
                this.presentLoading();
              }
    public rentalData =[{
              name:"VNR PG",
              id:1,
              rent:"6000",
              advance:"3000",
              location:"Kandanchavadi",
              sharing:"4",
              img:"../assets/img/pg1.jpg",
              views:12,
              comments:4,
              description:"VNR PG is located on kandanchavadi, and we are providing a wonderfull features..",
              postDate:"08 Mar,2015"
            },{
              name:"Sreekrishna",
              rent:"5000",
              id:2,
              advance:"2000",
              location:"perungudi",
              sharing:"3",
              img:"../assets/img/pg2.jpg",
              views:25,
              comments:0,
              postDate:"25 Apr,2013",
              description:"Sreekrishna is located on perungudi, and we are providing a wonderfull features.."
            },{
              name:"Harikrishna",
              rent:"7000",
              id:3,
              advance:"3000",
              location:"SRP tools",
              sharing:"2",
              img:"../assets/img/pg3.jpg",
              views:98,
              comments:10,
              postDate:"01 Jul,2017",
              description:"Harikrishna is located on SRP tools, and we are providing a wonderfull features.."
            }];
  presentLoading() {
    let loader = this.lodingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  loginAlert(){
    let prompt = this.alert.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
