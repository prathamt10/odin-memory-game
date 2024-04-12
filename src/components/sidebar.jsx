export default function Sidebar(props) {
    const { score, high_score } = props
    return (
        <div className='sidebar'>
            <header>
                <h1 className='sidebar-title'>Memory Game</h1>
            </header>
            <div className="score">Score: {score}</div>
            <div className="score">High Score: {high_score}</div>
            <div className="instructions">Get points by clicking on an image but don't click on any more than once!</div>
        </div>
    )
}