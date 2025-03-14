import React from 'react'
import styles from './TransformLife.module.scss';

const TransformLife = () => {
  return (
      <div className={`${styles['transformlife__background']} min-h-[50vh] relative w-full flex flex-col items-center justify-center`}>
        <div className="mt-[-20rem] flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold">LEONIDES</h1>
          <p className="text-1xl text-white tracking-[0.25rem]">Transform your life!</p>
        </div>
      </div>
  )
}
export default TransformLife
