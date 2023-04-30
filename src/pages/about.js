// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

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
        <title>About Me</title>
        <meta name="description" content="Your description" />
    </>)