import React from 'react'
import { useRecoilState } from 'recoil'

import type { AppState, Todo } from '../../dataStructure'
import { recoilState } from '../../dataStructure'

import styles from './UnderBar.module.css'

import FilterLink from './FilterLink'

const UnderBar: React.FC = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  const completed: number = appState.todoList.filter(t => t.completed === true).length /* eslint-disable-line prettier/prettier */
  const backlog: number = appState.todoList.filter(t => t.completed === false).length /* eslint-disable-line prettier/prettier */

  function clearCompleted(): void {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => !t.completed),
    })
  }

  return (
    <div>
      <footer className={styles.footer}>
      <span className={styles.todoCount}>
          <strong data-cy="remaining-uncompleted-todo-count">{backlog}</strong>{' '}
          item left
        </span>
        <FilterLink />

        {completed > 0 && (
          <button
            onClick={clearCompleted}
            className={styles.clearCompleted}
            data-cy="clear-completed-button"
          >
            Clear completed
          </button>
        )}
      </footer>
    </div>
  )
}

export default UnderBar
