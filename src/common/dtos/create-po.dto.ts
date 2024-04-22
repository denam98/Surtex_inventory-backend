import { Transform } from 'class-transformer';
import {
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PoItemDTO } from './po-item.dto';

export class CreatePoDTO {
  @IsNotEmpty()
  @IsString()
  supplier_id;

  @IsNotEmpty()
  @IsString()
  po_no;

  @IsOptional()
  @IsString()
  special_note;

  @IsOptional()
  @IsString()
  delivery_location;

  @IsOptional()
  @IsString()
  currency;

  @IsOptional()
  @IsString()
  state;

  @IsOptional()
  @IsString()
  discount_type;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tax_type;

  @IsOptional()
  @Transform(({ value }) => {
    return String(value);
  })
  @IsDecimal()
  discount;

  @IsNotEmpty()
  items: PoItemDTO[];
}
