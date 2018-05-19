import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {User} from '../models/user.model';
import {DataList} from '../../models/data-list.interface';

@Injectable()
export class UsersService {

    private baseUrl = '';
    public headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get Items list
     * @returns {Observable<any|any>}
     */
    getItemsList(): Observable<DataList<User>> {
        const url = `${this.baseUrl}/users.json`;
        return this.http.get<DataList<User>>(url, {headers: this.headers})
            .pipe(
                catchError(this.handleError<any>('getUsers', []))
            );
    }

    /**
     * Handle error
     * @param operation
     * @param result
     * @returns {(error:any)=>Observable<T>}
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}