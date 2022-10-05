// Deck component for card 

const Deck = ({deck}) => {
    const {
        title,
        commander,
        colors,
    } = deck;

    return (
        <li className="deck">
            <img src={commander} alt={title} />
            <p>This deck is {colors}</p>

        </li>
    );
}

export default Deck;