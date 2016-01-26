const initialState = {
  title: 'Untitled',
  data: 'Initial data'
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, {
        title: action.title
      });
    case 'SET_DATA':
      return Object.assign({}, state, {
        data: action.data
      });
    default: return state;
  }
};

export default app;
