function YourFeelings({current}){
  let moodElement;
  if(current === "Happy"){
    moodElement= <button>Puppies</button>
  }else{
    moodElement= <a href="#">Clouds</a>
  }
return(
  <>
  <p>
  You are currently feeling {current}
  </p>
  {current=== "Happy"? <h2> Woo Hoo!</h2> : <h4> Wah Wah </h4>}
  {moodElement}
  </>
);
}

export default YourFeelings;