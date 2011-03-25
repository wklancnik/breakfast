YUI.add('fork', function(Y){
    
    var Fork;
    
    Fork = function (config) {
        Fork.superclass.constructor.apply(this, arguments);
    };
    
    Y.mix(Fork, {
        NAME : 'fork',
        ATTRS : {
            
        }
    });
    
    Y.extend(Fork, Y.Base, {
        
        initializer: function (config) {
            
            Y.Global.on('egg:click', function(){
                Y.log(e.target.name);
            });
            
        }
        
    });
    
    Y.namespace('Breakfast');
    Y.Breakfast.Fork = Fork;

});