YUI.add('breakfast', function(Y){
    
    // # Breakfast
    //
    //
    
    // ## Variable Declarations
    //
    //
    var Breakfast;
    
    // ## Constructor
    //
    //
    Breakfast = function (config) {
        Breakfast.superclass.constructor.apply(this, arguments);
    };
    
    // ## Static Parameters
    //
    //
    Y.mix(Breakfast, {
        NAME : 'breakfast',
        ATTRS : {
            //// TODO: 
        }
    });
    
    // ## Prototype
    Y.extend(Breakfast, Y.Base, {
        
        
        
    });
    
    // Create the application namespace on Y.
    Y.namespace('Breakfast');
    
    // Add the application to the Y namespace.
    Y.Breakfast = Breakfast;

},
'@VERSION@',
{requires:[]});