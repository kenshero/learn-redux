var store = Redux.createStore(combineReducers)

valueEl = document.getElementById('value');
sumEl = document.getElementById('sumtxt');

function render() {
  console.log(store.getState());
  valueEl.innerHTML = store.getState().count;
  sumEl.innerHTML = store.getState().sum;
}

store.subscribe(render)
