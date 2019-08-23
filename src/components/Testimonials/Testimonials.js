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
      {/* <div className={styles.Masonry}>
        {dummyData.map((item, i) => {
          return <Item item={item} key={i} />
        })}
      </div> */}
      <div className={styles.Items}>
        {dummyData.map((item, i) => {
          return <Item item={item} key={i} location={i + 1} />
        })}
      </div>
    </section>
  )
}

const dummyData = [
  {
    name: "James Dove",
    bigText: "Amazing Atmosphere!",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore.",
  },
  {
    name: "Fiona Taggerty",
    bigText: "Uplifting",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis",
  },
  {
    name: "Sarah Willingham",
    bigText: "Loved Every Moment",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo.",
  },
  {
    name: "Oliver Bell",
    bigText: "Amazing Atmosphere!",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto corporis, tempore quo pariatur commodi.",
  },
  {
    name: "Donald Choi",
    bigText: "Amazing Atmosphere!",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
  },
]

export default Testimonials
