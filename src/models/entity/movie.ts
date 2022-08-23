import { type } from "os"
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
export class movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar", nullable: true })
  title: String

  @Column({ name: "gender", type: "varchar", nullable: true })
  gender: String

  @Column({ name: "classification", type: "varchar", nullable: true })
  classification: String

  @Column({ name: "subtitle", type: "varchar", nullable: true })
  subtitle: String

  @Column({ name: "image", type: "varchar", nullable: true })
  image: String

  @Column({ name: "releaseDate", type: "timestamp", nullable: true })
  releaseDate: Date

  @Column({ name: "director", type: "varchar", nullable: true })
  director: String

  @Column({ name: "writer", type: "varchar", nullable: true })
  writer: String

  @Column({ name: "studio", type: "varchar", nullable: true })
  studio: String

  @Column({ name: "actors", type: "varchar", nullable: true })
  actors: String

  @Column({ name: "resume", type: "varchar", nullable: true })
  resume: String

  @Column({ name: "awards", type: "varchar", nullable: true })
  awards: String

  @Column({ name: "note", type: "int", nullable: true })
  note: Number

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  created_at: Date

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  updated_at: Date
}
