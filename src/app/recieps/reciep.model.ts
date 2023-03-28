import { Ingredient } from "../shared/ingriedents.model";

export class Recipe{
    public name :string;
    public description:string;
    public imagePath:string;
    public ingridients:Ingredient[];
    constructor(name:string,desc:string,imagepath:string,ingridients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagepath;
        this.ingridients=ingridients;
    }
}