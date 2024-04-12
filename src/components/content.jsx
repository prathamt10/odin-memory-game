import Card from "./card"
import { fetchCatImages } from "./cats"
import { useState, useEffect } from 'react'

export default function Content(props) {
    const {
        score,
        high_score,
        setScore,
        setHighScore
    } = props

    const [cards, setCards] = useState([])

    useEffect(() => {
        loadCards()
    }, [])

    const gameOver = () => {
        if (score > high_score) {
            setHighScore(score)
        }
        alert('Game over!')
        setScore(0)
        loadCards()
    }

    const loadCards = () => {
        const cat_image_URLs = fetchCatImages()
        const new_cards = cat_image_URLs.map((url) => {
            return {
                src: url,
                matched: false
            }
        })
        setCards(new_cards)
    }

    const handleCardClick = (index) => {
        if (cards[index].matched) {
            gameOver()
            return
        }
        setScore(score + 1)
        
        const updated_cards = [...cards]
        updated_cards[index].matched = true
        const shuffled_cards = shuffleArray(updated_cards)
        setCards(shuffled_cards)

        if (shuffled_cards.every((card) => card.matched)) {
            alert('You won!')
            loadCards()
        }
    }

    const shuffleArray = (array) => {
        const new_array = [...array];
        for (let i = new_array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [new_array[i], new_array[j]] = [new_array[j], new_array[i]];
        }
        return new_array;
    };

    return (
        <div className='content'>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    card={card}
                    handleCardClick={handleCardClick}
                />
            ))}
        </div>
    )
}