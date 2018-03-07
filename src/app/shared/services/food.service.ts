import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable()
export class FoodService {

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Food[]>(`/food`);
    }

    public get(id: number) {
        return this.http.get<Food>(`/food/${id}`);
    }

    public create(food: Food) {
        return this.http.post<Food>(`/food`, food);
    }

    // public update(food: Food) {
    //     return this.http.put<Food>(`/food`, food);
    // }

    public remove(id: number) {
        return this.http.delete<Food>(`/food/${id}`);
    }
}
