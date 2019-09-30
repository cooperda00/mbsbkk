//Modules
import React from "react"
import { Link } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout>
    <h1> PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/">Head Home</Link>
  </Layout>
)

export default NotFoundPage
