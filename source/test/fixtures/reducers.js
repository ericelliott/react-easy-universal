const initialState = {
  title: 'Untitled',
  data: 'Initial data'
};

const reducers = {
  title: (state = initialState.title, action) => {
    switch (action.type) {
      case 'SET_TITLE':
        return action.title;
      default: return state;
    }
  },
  data: (state = initialState.data, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return action.data;
      default: return state;
    }
  }
};

export default reducers;
