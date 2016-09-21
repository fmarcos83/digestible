const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};
const promise = store => next => action => {
    if (!action.promise) {
        return next(action);
    }
    function makeAction(ready, data) {
        let newAction = Object.assign({}, action, {ready}, data)
        delete newAction.promise
        return newAction;
    }
    next(makeAction(false)); 
    return action.promise.then(
        result => next(makeAction(true, {result})),
        error => next(makeAction(true, {error})),
    )
}
module.exports = {logger: logger, promise: promise};
