import './card.style.css';
const Card = ({name, email, id}) =>{
  return (
      <div className="card-container">
          <img src={`https://robohash.org/${id}`} alt="" />
            <h3>{name}</h3>
            <p>{email}</p>
      </div>
  )
}

export default Card;