import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("movies")
export class Movies {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  categoryName!: string;

  @Column()
  listMovies!: string;
}
