export class Particle {
    constructor(x,y,directionX,directionY,size,color)
    {
        this.x=x
        this.y=y
        this.directionX=directionX
        this.directionY=directionY
        this.size=size
        this.color=color
        this.maxSize = 30
        this.minSize = 0

    }

    draw(ctx)
    {
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fillStyle=this.color
        ctx.fill()
    }

    update(maxX,maxY,mouse)
    {
        //check if within canvas
        if(this.x<0|| this.x>maxX)
            this.directionX=-this.directionX
        if(this.y<0|| this.y>maxY)
            this.directionY=-this.directionY

            let dx = this.x - mouse.x
            let dy = this.y - mouse.y

            if(dx*dx +dy*dy<mouse.radius*mouse.radius && mouse.active)
            {
                if(this.size < this.maxSize)
                {
                    this.size+=5
                }
            }
            else if(this.size > this.minSize )
                this.size -=.5
            if(this.size < this.minSize)
            {
                this.size = 0
            }

        this.x += this.directionX
        this.y += this.directionY
    }
}