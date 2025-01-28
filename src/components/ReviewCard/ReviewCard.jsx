import "./ReviewCard.css";
import star from "../../assets/Star.png"

export default function ReviewCard(props) {
  const rating = Array.from({length:props.rating},(_,index)=> index);
  const review = props.review;
  const name = props.name;
  const image = props.img;

  return (
    <section className="ReviewCard">
      <div className="ReviewStars">
        {rating.map((index) => {
            return <img src={star} key={index}/>
        })}
      </div>
      <div className="ReviewUser">
      <img src={image} />
      <h2>{name}</h2>
      </div>
      <h2 className="ReviewText">{review}</h2>
    </section>
  );
}
