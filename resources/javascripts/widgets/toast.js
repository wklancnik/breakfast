YUI.add('toast', function(Y){
    
    var Toast;
    
    Toast = function (config) {
        Toast.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Toast, {
        NAME: 'toast',
        ATTRS: {
            
        }
    });
    
    Y.extend(Toast, Y.Widget, {
        
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
    Y.BN.Toast = Toast;
    
});