function counter(currentState, action) {
	var DEFAULT_STATE = 0 ;
	if (typeof currentState === 'undefined' ) {
		nextState = DEFAULT_STATE;
		return nextState;
	}
	console.log(nextState);
	switch(action.type) {
	case "INCREMENT":
	  nextState = currentState + 1;
	  return nextState;
	case "DECREMENT":
	  nextState = currentState - 1;
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
	      	return nextState;
		default:
	  		return nextState;
	}
}

function combineReducers(currentState, action){
	// var DEFAULT_STATE = { count: 0, sum: 0};
	var nextState = Object.assign({},currentState);

	nextState = {
		count: counter(nextState.count, action),
		sum: sum(nextState.sum, action)
	}

	return nextState;
}

// function counter(currentState , action){
//   var DEFAULT_STATE = {count: 0, sum: 0};
//   var nextState = currentState;
//   if (typeof currentState === 'undefined' ) {
//     nextState = DEFAULT_STATE;
//     return nextState;
//   }

//   console.log(nextState);
//   switch(action.type) {
//     case "INCREMENT":
//       nextState.count = currentState.count + 1;
//       return nextState;
//     case "DECREMENT":
//       nextState.count = currentState.count - 1;
//       return nextState;
//     case "SUM":
//       nextState.sum = action.a + action.b;
//       return nextState;
//     default:
//       return nextState;
//   }
// }