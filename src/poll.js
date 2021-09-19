import React from 'react'
import styles from './poll.module.scss'

export default function Poll() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [results, setResults] = React.useState()
  const [resultsBG, setResultsBG] = React.useState({})
  const endpoint = '/api'

  const generateBG = response => (
    {
      yes: {
        background: 'linear-gradient(to right, #555 '+response.yes+', transparent '+response.yes+')'
      },
      no: {
        background: 'linear-gradient(to right, #555 '+response.no+', transparent '+response.no+')'
      }
    }
  )

  React.useEffect(async () => {
    /*
    let responseRaw = await fetch(endpoint+'/vote')
    let response = await responseRaw.json()
    */
    // 19.09.2021
    let response = { no: '70.8%', voted: true, yes: '29.2%' }
    if(response.voted) {
      setDisabled(true)
      setResults(response)
      setResultsBG(generateBG(response))
    }
    setLoaded(true)
  }, [])

  const handleVote = async yes => {
    setDisabled(true)
    let response = await fetch(endpoint+'/vote/'+yes, { method: 'POST' })
    let results = await response.json()
    setResults(results)
    setResultsBG(generateBG(results))
  }

  return (
    <div className={styles.poll}>
      { loaded ? <>
        <h3>А вы меняли свой пароль со стандартного 12345678?</h3>
        <button
          className={styles.variant}
          onClick={() => handleVote(true)}
          disabled={disabled}
          style={resultsBG.yes}
        >
          <label>Да</label>
          { results && <span className={styles.results}>{results.yes}</span> }
        </button>
        <button
          className={styles.variant}
          onClick={() => handleVote(false)}
          disabled={disabled}
          style={resultsBG.no}
        >
          <label>Нет</label>
          { results && <span className={styles.results}>{results.no}</span> }
        </button> </> : <p className={styles.centered}>Минутку...</p>
      }
      <span className={styles.pollClosed}>Голосование завершено 19 сентября 2021 года в 20:35 по Самарскому времени</span>
    </div>
  )
}
