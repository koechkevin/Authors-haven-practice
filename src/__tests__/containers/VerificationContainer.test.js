import { mapStateToProps } from '../../containers/Auth/VerificationContainer';
import verifyReducer from '../../reducers/verification.reducer';

it('correctly maps state to props', () => {
  const verify = verifyReducer;
  expect(mapStateToProps(verify)).toEqual({});
});
