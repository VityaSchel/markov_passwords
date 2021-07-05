import React from 'react'
import styles from './App.module.scss'
import Header from './header'
import Introduction from './article/introduction'
import Section1 from './article/section1'
import Section2 from './article/section2'
import Section3 from './article/section3'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'

function App() {
  const handleScroll = id => {
    scrollIntoView(document.querySelector('section#'+id), {
      scrollMode: 'always',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Introduction />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <aside>
        <nav>
          <button className={styles.nav} onClick={() => handleScroll('accounts')}>1</button>
          <button className={styles.nav} onClick={() => handleScroll('hack')}>2</button>
          <button className={styles.nav} onClick={() => handleScroll('protection')}>3</button>
        </nav>
      </aside>
    </>
  )
}

export default App
