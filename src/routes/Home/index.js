import Home from './Home.jsx';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    actions: dispatch.home
  };
};

const mapStateToProps = state => {
  return {
    states: state.home
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
