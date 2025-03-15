import { Container } from 'react-bootstrap';

function Ban() {
  return (
    <Container className="mt-5">
      <div className="text-center">
        <h1>Adopta un Robot con Robot Lovers!</h1>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <img src={require('../static/Banner.png')} alt="Banner" className="img-fluid" />
      </div>
      <hr className="my-4" />
    </Container>
  );
}

export default Ban;