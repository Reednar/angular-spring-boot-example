import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{

  recipes: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipeList()
      .subscribe({next: r => this.recipes = r, error: e => console.error(e)});
  }

  ngOnDestroy(): void {
    
  }

  onDelete(id: number) {
    this.recipeService.deleteRecipe(id)
      .subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: e => console.error(e)
      });
  }
}
