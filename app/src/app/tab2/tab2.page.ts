import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private navCtrl: NavController
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      qualification: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  onSubmit() {
    // this.apiService.createItem(this.myForm.value).subscribe(() => {
    //   this.navCtrl.navigateForward('/list');
    // });
  }

}
