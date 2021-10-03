import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly isDone: boolean;
}
