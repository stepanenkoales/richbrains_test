import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import './index.scss'

export const App = () => {
  return (
    <div>
      <h1>React Application</h1>
      <Button type="primary" onClick={() => console.log('Click')}>
        Press Button
      </Button>
    </div>
  )
}
