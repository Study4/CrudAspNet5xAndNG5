import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Emp } from './emp';

@Injectable()
export class EmpService {

    private heroesUrl = '/api/emps';

    constructor(private http: Http) { }

    getAll(): Promise<Emp[]> {
        return this.http.get(`${this.heroesUrl}`)
            .toPromise()
            .then(response => response.json() as Emp[])
            .catch(this.handleError);
    } // stub

    get(id: number): Promise<Emp> {
        return this.http.get(`${this.heroesUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as Emp[])
        .catch(this.handleError);
    } // stub

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}