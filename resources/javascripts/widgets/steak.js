YUI.add('steak', function(Y){
    
    var Steak;
    
    Steak = function (config) {
        Steak.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Steak, {
        NAME: 'steak',
        ATTRS: {
            
        }
    });
    
    Y.extend(Steak, Y.Widget, {
        
        CONTENT_TEMPLATE: null,
        
        initializer: function (config) {
            
            this.render();
            
        },
        
        destructor: function () {
            
            
            
        },
        
        renderUI: function () {
            
            
            
        }
        
    });
    
    Y.namespace('Breakfast');
    Y.Breakfast.Steak = Steak;
    
});