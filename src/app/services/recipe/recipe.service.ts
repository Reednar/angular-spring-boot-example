import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  // Get the list of recipes
  getRecipeList() {
    return this.http.get('/api/v1/recipes');
  }

  // CRUD operations

  // Create a new recipe
  createRecipe(recipe: any) {
    return this.http.post('/api/v1/recipes', recipe);
  }

  // Get a recipe by its id
  getRecipe(id: number) {
    return this.http.get(`/api/v1/recipes/${id}`);
  }

  // Update a recipe
  updateRecipe(recipe: any) {
    return this.http.put(`/api/v1/recipes/${recipe.id}`, recipe);
  }

  // Delete a recipe
  deleteRecipe(id: number) {
    return this.http.delete(`/api/v1/recipes/${id}`);
  }
}
