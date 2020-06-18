import { Ingredient } from '../shared/ingredient.model';


export class Recipe {
public name: string;
public description: string;
public imagePath: string;
public videoPath: string;
public ingredients: Ingredient [];


    constructor(name: string, desc: string, imagePath: string, videoPath : string, ingredients : Ingredient[]){
        this.name= name;
        this.description= desc;
        this.imagePath= imagePath;
        this.videoPath= videoPath;
        this.ingredients= ingredients;
    }
}