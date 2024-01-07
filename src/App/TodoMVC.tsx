import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import type { AppState } from '../dataStructure'
import { recoilState, LocalStorageKey } from '../dataStructure'

import Copyright from './Copyright'
import NewTodoInput from './NewTodoInput'
import TodoList from './TodoList'
import UnderBar from './UnderBar'
import styles from './App.module.css'

const TodoMVC: React.FC = () => {
  const appState = useRecoilValue<AppState>(recoilState)

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState), // convert JavaScript Object to string
    )
  }, [appState])

  return (
    <div>
      <section className={styles.todoapp}>
        <NewTodoInput />
        {appState.todoList.length ? (
          <>
            <TodoList />
            <UnderBar />
          </>
        ) : null}
      </section>
      <Copyright />
    </div>
  )
}

export default TodoMVC
