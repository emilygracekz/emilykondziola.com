import { FunctionComponent } from 'react';

interface Props {
  state: any;
  action: any;
}

const Reducer: FunctionComponent<Props> = ({ state = {}, action }) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export default Reducer;
