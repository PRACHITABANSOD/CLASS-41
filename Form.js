class Form{

    constructor(){

        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');
    }

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
    display(){

        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(530,100);
        
        this.input.position(500,200);
        this.button.position(600,250);
        
            this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

           player.name=this.input.value();
           playerCount+=1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);
            //var greeting=createElement("h3");
            this.greeting.html( "Hello " + player.name);
            this.greeting.position(550,200);

        });


    }
}