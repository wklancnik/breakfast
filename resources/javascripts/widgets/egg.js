YUI.add('egg', function(Y){
    
    var Egg;
    
    Egg = function (config) {
        Egg.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Egg, {
        NAME: 'egg',
        ATTRS: {
            
        }
    });
    
    Y.extend(Egg, Y.Widget, {
        
        CONTENT_TEMPLATE: null,
        
        initializer: function (config) {
            
            this.render();
            
        },
        
        destructor: function () {
            
            
            
        },
        
        renderUI: function () {
            
            
            
        }
        
    });
    
    Y.namespace('BN');
    Y.BN.Egg = Egg;
    
});