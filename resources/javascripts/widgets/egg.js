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
            
            
            
        },
        
        bindUI: function () {
            
            this.on('click', Y.bind(this._publish))
            
        },
        
        _publish: function () {
            
            var publisher = new Y.EventTarget();
            
            publisher.name = 'egg';
            publisher.publish('egg:click', {
                broadcast: 2,
                emitFacade: true
            });
            
        }
        
    });
    
    Y.namespace('Breakfast');
    Y.Breakfast.Egg = Egg;
    
});