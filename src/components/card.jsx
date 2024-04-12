export default function Card({ index, card, handleCardClick }) {
    return (
        <div
            className="card"
            onClick={() => handleCardClick(index)}
        >
            <img
                src={card.src}
                alt="cat"
            />
        </div>
    )
}