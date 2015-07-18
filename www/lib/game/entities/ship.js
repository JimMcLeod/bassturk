ig.module(
    'game.entities.ship'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityShip = ig.Entity.extend({
        size: {x:64, y:64},
        angle: 0,

        animSheet: new ig.AnimationSheet('media/ship.png', 64, 64),

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        },

        update: function (){
            if (ig.input.state('right')) {
                this.angle += 1;
                if (this.angle >= 360) {
                    this.angle -= 360;
                }
            }
            if (ig.input.state('left')) {
                this.angle -= 1;
                if (this.angle < 0) {
                    this.angle += 360;
                }
            }

            this.currentAnim.angle = (this.angle * 3.141/180);
        }
    });
});