class hlo
{
    age=12;      //public 
    weight=67;   //public 
    width;
    // *if  i want to convert to private then use #before variable
    #height=6.5;

    //!CONSTRUCTOR

    constructor(width,weight,newheight)
    {
        this.width=width;
        this.weight=weight;
        this.#height=newheight;
    }

    walk()
    {
        console.log("walking");
    }

    get height()
    {
       return  this.#height;
    }
    set height(num)
    {
        this.#height=num;
    }
}

// let obj=new hlo();
// console.log(obj.age);
// obj.walk();
// // console.log(obj.#height); error

// //* TO ACCESS PRIVATE VARIABLES WE USE GETTERS AND SETTERS

// obj.height=43;
// console.log(obj.height);

//* FOR CONSTRtCOR VALUES;
// let obj2=new hlo(20,69);
// console.log(obj2.width);
// console.log(obj2.weight);


//for private values
let obj3=new hlo(20,69,8.9);
console.log(obj3.height);