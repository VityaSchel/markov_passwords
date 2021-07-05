import React from 'react'
import styles from './App.scss'
import Header from './header'
import Introduction from './article/introduction'
import Section1 from './article/section1'
import Section2 from './article/section1'
import Section3 from './article/section3'

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Introduction />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  )
}

export default App
