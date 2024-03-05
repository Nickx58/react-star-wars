import { connect } from 'react-redux';
import { Home } from './Home';
import { AppState } from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  planets: state.db.planets,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedHome = connect(mapState, mapDispatch)(Home);
export default ConnectedHome;
