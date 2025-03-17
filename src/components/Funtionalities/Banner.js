import { Container } from 'react-bootstrap';
import { useIntl } from 'react-intl';

function Ban() {
  const { formatMessage } = useIntl();

  return (
    <Container className="mt-5">
      <div className="text-center">
        <h1>{formatMessage({ id: 'bannerTitle' })}</h1>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <img 
          src={require('../static/Banner.png')} 
          alt="Banner" 
          className="img-fluid" 
          style={{ maxHeight: '50%' }} 
        />
      </div>
      <hr className="my-4" />
    </Container>
  );
}

export default Ban;