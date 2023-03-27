import { IsNotEmpty } from 'class-validator';

export class FilterDto {
  @IsNotEmpty({ message: 'Item name is required.' })
  itemName: string;
}
