import React from 'react'
import styles from './header.module.scss'
// import cx from 'classnames'

export default function Header() {
  const [heading, setHeading] = React.useState('')
  const [subheading, setSubheading] = React.useState('')
  const [scrollY, setScrollY] = React.useState(0)
  const [parallax, setParallax] = React.useState(0)
  const headerRef = React.useRef()

  const onScroll = () => {
    setScrollY(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

  const headerHeight = document.documentElement.clientHeight - scrollY

  React.useEffect(() => {
    let headingInterval, subheadingInterval, i = 0, j = 0

    headingInterval = setInterval(() => {
      setHeading('Пароли Маркова'.substr(0,i++))
      if(i > 14){ clearInterval(headingInterval) }
    }, 50)

    subheadingInterval = setInterval(() => {
      setSubheading('Как я взломал СамЛИТ и получил доступ к данным и аккаунтам всех учеников'.substr(0,j++))
      if(j > 72){ clearInterval(subheadingInterval) }
    }, 10)
  }, [])

  React.useEffect(() => setInterval(() => setParallax(performance.now()/100), 10), [])
  React.useEffect(() => {window.addEventListener('load', onScroll); onScroll()}, [])

  return (
    <header className={styles.header} style={{
      height: Math.max(headerHeight, 200)+'px',
      top: headerHeight <= 200 ? headerHeight-200+'px' : '0px',
      backgroundPositionY: parallax+'px'
    }} ref={headerRef}>
      <div className={styles.headings}>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
    </header>
  )
}
