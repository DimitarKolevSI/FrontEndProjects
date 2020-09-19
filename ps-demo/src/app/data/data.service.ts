import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
    //return of(userSettings);
    return this.http.post('https://putsreq.com/kAXtslsBR2DE0U2TAtWb',userSettings); 
  }

  getSubscriptionTypes():Observable<string[]>{
      return of(['Monthly','Anual','Lifetime']);    
  }
}
