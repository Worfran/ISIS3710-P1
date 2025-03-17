import { Container } from "react-bootstrap";
import { useIntl } from 'react-intl';

function Foot() {
    const { formatMessage } = useIntl();

    return (
        <Container as="footer" className="text-center mt-4">
            <p>
                {formatMessage({ id: 'contactUs' })}
            </p>
        </Container>
    )
}

export default Foot;