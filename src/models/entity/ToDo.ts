import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "gender", type: "varchar" })
  gender: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "image", type: "varchar" })
  image: String
}

/*


   director: string,

   writer: string,

   studio: string,

   actors: [Actor],

   resume: string,

   awards: [Awards],

   note: number
   */
