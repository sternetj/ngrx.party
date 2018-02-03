import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Supply } from '../models/supply';

@Injectable()
export class SuppliesService {

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Supply>(`/supplies`);
    }

    public get(id: number) {
        return this.http.get<Supply>(`/supplies/${id}`);
    }

    public create(supply: Supply) {
        return this.http.post<Supply>(`/supplies`, supply);
    }

    public update(supply: Supply) {
        return this.http.put<Supply>(`/supplies`, supply);
    }

    public remove(supply: Supply) {
        return this.http.post<Supply>(`/supplies`, supply);
    }
}
