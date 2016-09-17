$(function(){

    const counter =  (state = 0 , action) => {
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            default:
                return state;
        }
    }

    const render = () => {
        count = store.getState();
        console.log(count);
        $("#count").text(count);
    }

    const { createStore } = Redux;
    const store = createStore(counter);

    store.subscribe(render);
    render();

    $('#increment').click( () => {
        store.dispatch({ type: 'INCREMENT' })
    });


});