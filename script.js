TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}

function triangle(size){
forward(size);
right(120);
forward(size);
right(120);
forward(size);
right(120);
}

function rectangle(){
forward(100);

}

// Type your function call below
square(120);
triangle(40);
rectangle();
stamp();
