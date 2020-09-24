import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

    private form:NgForm;
    originalUserSettings: UserSettings = {
        name: null,
        emailOffers: null,
        interfaceStyle: null,
        subscriptionType: null,
        notes: null
    };

    singleModel = "On";
    startDate:Date;
    startTime:Date;
    userSettings: UserSettings = { ...this.originalUserSettings };
    postError = false;
    maxRating:number;
    userRating:number;
    isReadonly=false
    postErrorMessage='';
    subscriptionTypes: Observable<string[]>;
    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.subscriptionTypes = this.dataService.getSubscriptionTypes();
        this.startDate = new Date();
        this.startTime = new Date();
        this.maxRating = 10;
        this.userRating = 5;
    }

    onHttpError(errorResponse:any){
        console.log(`Error: ${errorResponse}`);
        this.postError = true;
        this.postErrorMessage = errorResponse.error.errorMessage;
        
    }
    onSubmit(form:NgForm){
        console.log('in onSubmit: ',form.value)
        /*if (form.valid){
            this.dataService.postUserSettingsForm(this.userSettings).subscribe(
                result => console.log("Success: ",result),
                error => this.onHttpError(error)
            );
        }
        else{
            this.postError = true;
            this.postErrorMessage = 'Please fix the above errors';
        }*/
    }

    onBlur(field: NgModel){
        console.log("In on blur");
    }
}
 