const logger = (store) => {
	return (next) => {
		return (action) => {
			next(action);
		}
	}
}

const crashReporter = (store) => {
	return (next) => {	
		return (action) => {
			try{
				next(action);
			}catch(err){
				console.log("Error Report SSS: ", err);
			}
		}
	}
}

const thunk = (store) => {
	return (next) => {
		return (action) => {
			if(typeof action === 'function'){
				action(store.dispatch, store.getState());
			} else {
				next(action);
			}
		}
	}
}
