import React, { memo } from 'react'
import styles from './App.module.css'

const Copyright: React.FC = memo(
  () => (
    <footer className={styles.info}>
      <p>
        Created by{' '}
        <a href="https://ryota-murakami.github.io/">Ryota Murakamai</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  ),
  () => true,
)

export default Copyright
