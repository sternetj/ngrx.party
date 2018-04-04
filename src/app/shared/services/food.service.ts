import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable()
export class FoodService {

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Food[]>(`/api/food`);
    }

    public get(id: string) {
        return this.http.get<Food>(`/api/food/${id}`);
    }

    public create(food: Food, user: string) {
        return this.http.post<Food>(`/api/food`, { food, user });
    }

    public update(food: Food) {
        return this.http.put<Food>(`/api/food`, food);
    }

    public remove(id: number) {
        return this.http.delete<Food>(`/api/food/${id}`);
    }
}
