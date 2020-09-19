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

    userSettings: UserSettings = { ...this.originalUserSettings };
    postError = false;
    postErrorMessage='';
    subscriptionTypes: Observable<string[]>;
    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.subscriptionTypes = this.dataService.getSubscriptionTypes()
    }

    onHttpError(errorResponse:any){
        console.log(`Error: ${errorResponse}`);
        this.postError = true;
        this.postErrorMessage = errorResponse.error.errorMessage;
        
    }
    onSubmit(form:NgForm){
        if (form.valid){
            this.dataService.postUserSettingsForm(this.userSettings).subscribe(
                result => console.log("Success: ",result),
                error => this.onHttpError(error)
            );
        }
        else{
            this.postError = true;
            this.postErrorMessage = 'Please fix the above errors';
        }
    }

    onBlur(field: NgModel){
        console.log("In on blur");
    }
}
 