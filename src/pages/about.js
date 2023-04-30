// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>Hi there! I'm the proud creatof of this site, which is built using Gatsby.</p>
        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage

// Exporting the Head component from the Gatsby API. Contains the page head metadata.
export const Head = () => (
    <>
        <Seo title="About" />
        <meta name="description" content="Your description" />
    </>)