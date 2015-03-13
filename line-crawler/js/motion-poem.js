(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeMotionPoem = function () {
        var view = new createjs.Container();
        stage.addChild(view);

        const ACROSS = 'across';
        const DOWN = 'down';
        const BACK = 'back';
        const UP = 'up';

        // TODO 1 : Declare our variables //
        
        var i, shape, direction;

        var _motionPoem = {
            init: function() {
                // TODO 2 : Initialize our variables //
                
                i = 0;
                direction = ACROSS;
                shape = new createjs.Shape();
                view.addChild(shape);
            },

            update: function () {
                // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
                
                ////////////////////////////////////////////////////////////////
                // START OF CONDITIONAL STATEMENTS                            //
                ////////////////////////////////////////////////////////////////
                
                // TODO 3 : Create the condition for ACROSS //
                
                if (direction === ACROSS) {
                    draw.line(i, 0, Math.random() * canvas.width, canvas.height, draw.randomColor(25,200,
                    if (i < canvas.width) {
                        i++;
                    } else {
                        direction = DOWN;
                        i = 0;
                    }
                }

                // TODO 4 : Create a condition for DOWN //
                 
                 else if (direction === DOWN) {
                     
                 }
                 
                // TODO 5 : Create a condition for BACK //
                
                else if (direction === BACK) {
                    
                }
                
                 
                // TODO 6 : Create a condition for UP //
                
                else {
                    
                }
                
                ////////////////////////////////////////////////////////////////
                // END OF CONDITIONAL STATEMENTS                              //
                ////////////////////////////////////////////////////////////////
            }
        };
        return _motionPoem;
    };
}(window));