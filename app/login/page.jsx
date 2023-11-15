"use client"

import styles from "./page.module.css"

export default function Login(){
  return (
    <div className="body-container">
      <div className={styles['login-container']}>
        <h1 className={styles['title']}>LOGIN</h1>
        <input className={styles['input-field']} type="text" placeholder="Username"/>
        <input className={styles['input-field']} type="password" placeholder="Password"/>
        <div className={styles['login-btn']}>Login</div>
      </div>
    </div>
  )
}
