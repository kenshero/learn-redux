function images(currentState, action) {
    var DEFAULT_STATE = {payload: [] , loading:"Please click to random" };
    var nextState = Object.assign({},currentState);

    if (typeof currentState === 'undefined' ) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch(action.type) {
    case "IMAGES":
      nextState.payload = action.payload;
      nextState.loading = "loaded";
      return nextState;
    case "IMG_LOADING":
      nextState.loading = "Loading...";
      return nextState;
    default:
   		nextState = currentState;
      return nextState;
    }
}
