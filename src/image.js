import React from 'react'
import PropTypes from 'prop-types'
import styles from './image.module.scss'
import cx from 'classnames'

Image.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default function Image(props) {
  return (
    <div className={cx(styles.image, { [styles.hasLabel]: props.label })}>
      <img src={props.src} alt={props.label ?? ''} className={styles.foreground} onClick={() => window.open(props.src)} />
      <img src={props.src} alt='' className={styles.background} />
      { props.label && <label>{props.label}</label> }
    </div>
  )
}
