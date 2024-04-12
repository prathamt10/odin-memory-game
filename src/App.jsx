import './styles/App.css'
import Sidebar from './components/sidebar'
import Content from './components/content'
import { useState } from 'react'

function App() {
    const [score , setScore] = useState(0)
    const [high_score , setHighScore] = useState(0)

    return (
        <div className='app'>
            <Sidebar 
                score={score}
                high_score={high_score}
            />
            <Content
                score={score}
                high_score={high_score}
                setScore={setScore}
                setHighScore={setHighScore}
            />
        </div>
    )
}

export default App
