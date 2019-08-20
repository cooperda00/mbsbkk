//Modules
import React from "react"
//Sass
import styles from "./Testimonials.module.scss"
//Components
import Item from "./Item/Item"
import Title from "../Utility/Title/Title"

const Testimonials = () => {
  return (
    <section className={styles.Testimonials}>
      <div className={styles.Container}>
        <Title
          title={"Here are some kind words our guests had for us last year"}
        />
      </div>
      <div className={styles.Masonry}>
        {dummyData.map((item, i) => {
          return <Item item={item} key={i} />
        })}
      </div>
    </section>
  )
}

const dummyData = [
  {
    name: "James Dove",
    country: "USA",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur nisi nobis corrupti, blanditiis soluta?",
  },
  {
    name: "Fiona Taggerty",
    country: "Ireland",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit.",
  },
  {
    name: "Jack Dempsy",
    country: "Canada",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur",
  },
  {
    name: "Sarah Willingham",
    country: "Australia",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur nisi nobis corrupti, blanditiis soluta? neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur nisi nobis corrupti, blanditiis soluta?",
  },
  {
    name: "Oliver Bell",
    country: "UK",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur nisi nobis corrupti, blanditiis soluta? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi neque iste ipsam voluptates accusamus vel tenetur earum impedit, exercitationem consectetur nisi nobis corrupti, blanditiis soluta?",
  },
  {
    name: "Donald Choi",
    country: "South Korea",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ?",
  },
]

export default Testimonials
