var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk))

valueEl = document.getElementById('value');
sumEl = document.getElementById('sumtxt');
loadingStatus = document.getElementById('status');

function render() {
  var state = store.getState();
  valueEl.innerHTML = state.count.result;
  sumEl.innerHTML = state.sum;

  if(state.count.loading){
  	loadingStatus.innerHTML = "is loading...";
  } else {
  	loadingStatus.innerHTML = "loaded";
  }
}

store.subscribe(render)

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch(increment())
});

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch(decrement())
});

document.getElementById('incrementAsync').addEventListener('click', function () {
  store.dispatch(asyncIncrease)
});

document.getElementById('sum').addEventListener('click', function () {
  console.log("sum");
  store.dispatch(getSum(5, 3))
});
