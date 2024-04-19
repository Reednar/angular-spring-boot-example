import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interfaces/recipe';

import { RecipeService } from '../services/recipe/recipe.service';

import { ActivatedRoute, Router } from '@angular/router';

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent implements OnInit {
  recipe: IRecipe = {
    id: null,
    name: '',
    description: '',
  };

  formSubmitted: boolean = false;

  faDeleteLeft = faDeleteLeft;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      console.log('Edit mode');
      this.recipeService
        .getRecipe(Number(this.route.snapshot.paramMap.get('id')))
        .subscribe({
          next: (r) => (this.recipe = r as IRecipe),
          error: (e) => console.error(e),
        });
    }
  }

  onSubmit() {
    this.formSubmitted = true;


    if (this.recipe.name && this.recipe.description) {
      if (this.recipe.id) {
        // Update the recipe
        this.recipeService.updateRecipe(this.recipe).subscribe(
          (next) => this.router.navigate(['/recettes']),
          (error) => console.log('Error', error)
        );
      } else {
        // Create a new recipe
        this.recipeService.createRecipe(this.recipe).subscribe(
          (next) => this.router.navigate(['/recettes']),
          (error) => console.log('Error', error)
        );
      }
    } else {
      console.log('Invalid form');
    }
  }

  isNewRecipe(): boolean {
    return this.recipe.id == null;
  }

  goBack() {
    this.router.navigate(['/recettes']);
  }
}
