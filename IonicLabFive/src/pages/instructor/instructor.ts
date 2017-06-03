import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions } from '@ionic-native/google-maps';

import { InstructorService } from '../../components/instructors/shared/instructor.service';
import { InstructorModel } from '../../components/instructors/shared/instructor.model';

@IonicPage()
@Component({
    selector: 'instructor',
    templateUrl: 'instructor.html'
})

export class InstructorPage {

    private instructorModel: InstructorModel;
    private instructorService: InstructorService;
    private navCtrl: NavController;
    private navParams: NavParams;
    private id: number;
    private googleMaps: GoogleMaps;

    constructor(navCtrl: NavController, navParams: NavParams, instructorService: InstructorService, googleMaps: GoogleMaps) {
        this.instructorService = instructorService;
        this.navParams = navParams;
        this.googleMaps = googleMaps;

        this.id = this.navParams.get('id');
        this.instructorModel = this.instructorService.getInstructor(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Instructor');
        this.loadMap(this.instructorModel);
    }

    public loadMap(instructorModel: InstructorModel): void {

        let element: HTMLElement = document.getElementById('map');
        let map: GoogleMap = this.googleMaps.create(element);
        map.clear();

        let pos: LatLng = new LatLng(instructorModel.latitude, instructorModel.longitude);

        let position: CameraPosition = {
            target: pos,
            zoom: 5,
        };

        let markerOptions: MarkerOptions = {
            position: pos,
            title: instructorModel.name,
        };

        map.one(GoogleMapsEvent.MAP_READY).then(
            () => map.addMarker(markerOptions)
                .then(
                () => map.moveCamera(position)),
            (marker) => marker.showInfoWindow(),
        );

    }

}