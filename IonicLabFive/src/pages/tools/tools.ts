import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tools',
    templateUrl: 'tools.html'
})

export class ToolsPage {
    private navCtrl: NavController;

    constructor(navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Tools');
    }
}