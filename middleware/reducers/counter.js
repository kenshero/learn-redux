function counter(currentState, action) {
    var DEFAULT_STATE = {result:0, loading:false };
    var nextState = Object.assign({},currentState);

    if (typeof currentState === 'undefined' ) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch(action.type) {
    case "INCREMENT":
      nextState.result = currentState.result + 1;
      nextState.loading = false;
      return nextState;
    case "DECREMENT":
      nextState.result = currentState.result - 1;
      nextState.loading = false;
      return nextState;
    case "LOADING":
      nextState.loading = true;
      return nextState;
    default:
      return nextState;
    }
}

function sum(currentState, action) {
    var DEFAULT_STATE = 0 ;
    if (typeof currentState === 'undefined' ) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch(action.type) {
        case "SUM":
            nextState = action.a + action.b;
            funcWithError()
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}

function combineReducers(currentState, action){
    var nextState = Object.assign({},currentState);

    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    console.log(nextState);
    return nextState;
}

function funcWithError(){
    throw Error('error from sum');
}