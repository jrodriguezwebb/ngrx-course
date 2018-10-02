import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserData } from '../../../shared/to/all-user-data';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor( private http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads').pipe(
      map(res => res.json())
    );

  }
}
