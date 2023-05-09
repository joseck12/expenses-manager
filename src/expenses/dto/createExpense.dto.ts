import { IsNotEmpty,Length } from "class-validator";

export class CreateExpenseDto{

  id:number;

  @IsNotEmpty({message: "The expense should have an item"})
  @Length(3, 255)
  item:string;

  @IsNotEmpty()
  amount:number;

  @IsNotEmpty()
  @Length(3, 255)
  category:string;

  @IsNotEmpty()
  @Length(3, 255)
  location:string;

  // @IsNotEmpty()
  spentOn:Date

  // @IsNotEmpty()
  createdOn:Date;




}
