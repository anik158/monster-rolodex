import './card-list.style.css';
import Card from '../cards/card.component';

const CardList = ({monsters}) => {
    return (
        <div className="card-list-container">
            {
                monsters.map(({name, email, id},inx) => {
                    return <Card key={`${name}-${inx}`} name={name} email={email} id={id}/>
                })
            }

        </div>
    )
}

export default CardList;