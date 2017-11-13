// event queue

// JS event queue has is list of notifications
// of events

// The event queue get looked at when the
// execusion stack is empty

// once empty JS waits until an event is triggered
// A click event for instance.
// at this point this execution stack as stated
// is empty.
//  when a click event does occur then a new
//execution context is generated becuase in
// this example that click event had a function
// as an event handler so a new execution context 
// gets on the stack.

// in the stricted terms javascript only runs 
//synchronously. The browser puts supposed "async"
// events into the event queue.

// long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}

function clickHandler(){
    console.log('click event');
}

//listen for the click event 
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');