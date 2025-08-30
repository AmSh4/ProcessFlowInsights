const initialState = {
  analysis: { data: null, suggestions: [] },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ANALYSIS':
      return { ...state, analysis: action.payload };
    default:
      return state;
  }
}