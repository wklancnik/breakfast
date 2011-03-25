YUI.add('knife', function(Y){
    
    var Knife;
    
    Knife = function (config) {
        Knife.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Knife, {
        NAME : 'knife',
        ATTRS : {
            
        }
    });
    
    Y.extend(Knife, Y.Base, {
        
        initializer: function (config) {
            
            
            
        }
        
    });
    
    Y.namespace('Breakfast');
    Y.Breakfast.Knife = Knife;

});