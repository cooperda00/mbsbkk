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
        <Title title={"Visitor Appreciation"} />
      </div>
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
    name: "SB, France",
    bigText: "Bravo!",
    text: "Bravo! Such and inspiring event.",
    stars: 5,
  },
  {
    name: "DG, UK",
    bigText: "Incredible",
    text: "What an incredible day!",
    stars: 5,
  },
  {
    name: "GB, France",
    bigText: "Best Memories",
    text: "It will be one of my best memories in Bangkok.",
    stars: 5,
  },
  {
    name: "RC, UK",
    bigText: "Good Vibes",
    text:
      "Loved all the workshops and left with some seriously good vibes and goodies.",
    stars: 4,
  },
  {
    name: "TN, Thailand",
    bigText: "Healing",
    text: "Fun holistic shopping spree,educational,healing and delicious.",
    stars: 4,
  },
  {
    name: "LA, Sweden",
    bigText: "Community",
    text:
      "So for me the best part was being part and creating a sense of community. Oh! And being tempted to try and learn new things.",
    stars: 4,
  },
  {
    name: "LM, USA",
    bigText: "Magical",
    text:
      "I can't express how much my soul is on fire after such a magical event.",
    stars: 5,
  },
  {
    name: "AC, USA",
    bigText: "Heartfully Created",
    text:
      "Heartfully created event with such a beautiful variety of vendors and healers.",
    stars: 5,
  },
]

export default Testimonials
