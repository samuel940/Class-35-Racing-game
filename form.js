class Form {
    constructor() {

    }
    display() {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("name");
        input.position(430,160);

        var button = createButton("Start");
        button.position(500,200);

        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.update(playerCount);
            var greeting = createElement("h2");
            greeting.html("hello " + name);
            greeting.position(430,160);
        })
    }
}