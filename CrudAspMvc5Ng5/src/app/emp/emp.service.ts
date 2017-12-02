import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Emp } from './emp';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmpService {

    private empUrl = '/api/emps';

    constructor(
        private http: HttpClient) { }

    getAll(): Observable<Emp[]> {
        return this.http.get<Emp[]>(this.empUrl)
            .pipe(
            catchError(this.handleError('getEmps', []))
            );
    }

    get(id: number): Observable<Emp> {
        const url = `${this.empUrl}/${id}`;
        return this.http.get<Emp>(url).pipe(
            catchError(this.handleError<Emp>(`getEmp id=${id}`))
        );
    }

    add(emp: Emp): Observable<Emp> {
        return this.http.post<Emp>(this.empUrl, emp, httpOptions).pipe(
            catchError(this.handleError<Emp>('addEmp'))
        );
    }

    update(emp: Emp): Observable<any> {
        const url = `${this.empUrl}/${emp.id}`;
        return this.http.put(url, emp, httpOptions).pipe(
            catchError(this.handleError<any>('updateEmp'))
        );
    }

    delete(emp: Emp | number): Observable<Emp> {
        const id = typeof emp === 'number' ? emp : emp.id;
        const url = `${this.empUrl}/${id}`;
        return this.http.delete<Emp>(url, httpOptions).pipe(
            catchError(this.handleError<Emp>('deleteEmp'))
        );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    //private log(message: string) {
    //    this.messageService.add('HeroService: ' + message);
    //}
}