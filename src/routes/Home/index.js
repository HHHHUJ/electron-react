import Home from './Home.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selector, actions } from '../../redux/modules/home';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

const mapStateToProps = state => {
  return {
    states: selector(state)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
