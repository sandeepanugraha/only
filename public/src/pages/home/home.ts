import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GetPropertiesProvider } from '../../providers/get-properties/get-properties'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[GetPropertiesProvider]
})
export class HomePage {
  public rentalData = [];
  public offset : any=0;
  constructor(
    public navCtrl: NavController,
    public lodingCtrl:LoadingController,
    public alert:AlertController,
    public getProp:GetPropertiesProvider
  ){
    this.getProp.getProperties(this.offset).then(
      prop=>{
        for (var key in prop) {
          if (prop.hasOwnProperty(key)) {
            var element = prop[key];
            this.rentalData.push(prop[key]);                        
          }
        }
        this.offset = this.rentalData.length;
      }
    )
    this.presentLoading();
  }
  getPropertiesDetails(infiniteScroll){
    setTimeout(() => {
      this.getProp.getProperties(this.offset).then(
        prop=>{
          for (var key in prop) {
            if (prop.hasOwnProperty(key)) {
              var element = prop[key];
              this.rentalData.push(prop[key]);                        
            }
          }
          this.offset = this.rentalData.length;
        }
      )
      infiniteScroll.complete();
    },500)
  }
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
