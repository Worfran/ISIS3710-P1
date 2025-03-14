import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <div className="Container mt-5"> 
      <div className="banner text-center">
        <h1>Adopta un Robot con Robot Lovers!</h1>
      </div>
      <div className="container">
        <img src={require('../../statics/Banner.png')} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;