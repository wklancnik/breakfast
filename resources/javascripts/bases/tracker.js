YUI.add('tracker', function(Y){
    
    var Tracker;
    
    Tracker = function (config) {
        Tracker.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Tracker, {
        NAME : 'tracker',
        ATTRS : {
            
        }
    });
    
	var loadEvent = "tracker:load";
	var loadDone = "tracker:done";

	Y.publish(loadEvent, {
	    broadcast:  2,   // global level notification
	    emitFacade: true // emit a facade so we get the event target
	});

    Y.on("domready", function() {
        Y.fire(loadEvent);
    });

    Y.Global.after(loadEvent, function() {
        Y.fire(loadDone);
    });
	console.log("ran one-time init");

    Y.extend(Tracker, Y.Base, {
        
        initializer: function (config) {
			console.log("ran init");
			if(typeof config.fn === 'function') {
				/*Y.Global.on(loadEvent,config.fn);*/
				config.fn();
			}
/*			Y.Global.on(loadEvent,function(){console.log("testing");});*/
		}
        
    });
    
    Y.namespace('Tracker');
    Y.Tracker = Tracker;

});
