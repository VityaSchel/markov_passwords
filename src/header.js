import React from 'react'
import styles from './header.module.scss'

export default function Header() {
  const [heading, setHeading] = React.useState('')
  const [subheading, setSubheading] = React.useState('')
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

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

  return (
    <header className={styles.header} style={{ height: window.innerHeight - scrollY+'px' }}>
      <div className={styles.headings}>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
    </header>
  )
}
