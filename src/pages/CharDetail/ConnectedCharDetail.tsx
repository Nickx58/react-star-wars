import { connect } from 'react-redux';
import { CharDetail } from './CharDetail';
import { AppState } from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  planets: state.db.planets,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedCharDetail = connect(mapState, mapDispatch)(CharDetail);
export default ConnectedCharDetail;
