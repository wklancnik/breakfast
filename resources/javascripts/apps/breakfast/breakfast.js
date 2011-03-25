YUI.add('breakfast', function(Y){
    
    var Breakfast;
    
    Breakfast = function (config) {
        Breakfast.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Breakfast, {
        NAME : 'breakfast',
        ATTRS : {
            
        }
    });
    
    Y.extend(Breakfast, Y.Base, {
        
        initializer: function (config) {
            
            new Y.Breakfast.Knife();
            new Y.Breakfast.Fork();
            
        }
        
    });
    
    Y.namespace('Breakfast');
    Y.Breakfast.App = Breakfast;

});