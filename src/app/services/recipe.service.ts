import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes = ajax('https://services.corneliuses.com/getrecipes-brian');
}
