import { connect } from 'react-redux';
import Resume from '../components/Resume';
import { getItems, getTotal } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Resume);
