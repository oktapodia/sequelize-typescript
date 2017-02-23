import {Table, Model, Column, DataType} from "../../index";

@Table
export class Person extends Model<Person> {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1
  })
  id: string;
}
