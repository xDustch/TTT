$(document).ready(function(){

    var GameArr = new Array(9);//array that tracks the state of the boxes
    var Turn = "O";
    var CheckArguments = function(a,b,c){
        if(a!=null && a == b && a == c){
            return true;
        }
        return false;
    }

    var isRow = function()
    {
        if(CheckArguments(GameArr[0],GameArr[1],GameArr[2]))
        {
            return true;
        }
        if(CheckArguments(GameArr[3],GameArr[4],GameArr[5]))
        {
            return true;
        }
        if(CheckArguments(GameArr[6],GameArr[7],GameArr[8]))
        {
            return true;
        }
        return false;
    }

    var isColumn = function()
    {
        if(CheckArguments(GameArr[0],GameArr[3],GameArr[6]))
        {
            return true;
        }
        if(CheckArguments(GameArr[1],GameArr[4],GameArr[7]))
        {
            return true;
        }
        if(CheckArguments(GameArr[2],GameArr[5],GameArr[8]))
        {
            return true;
        }
        return false;
    }

    var isDiagonal = function()
    {
        if(CheckArguments(GameArr[0],GameArr[4],GameArr[8]))
        {
            return true;
        }
        if(CheckArguments(GameArr[2],GameArr[4],GameArr[6]))
        {
            return true;
        }
        return false;
    }

    var isWinner = function()
    {
        if(isRow() || isColumn() || isDiagonal())
        {
            alert("Winner: " + Turn);
        }
    }

    var Cross = function(e){
        e.append("<img src='img/cross.png'/>");
        GameArr[parseInt(e.attr('id'),10)] = "X"; //Loads the game array
        isWinner();
    };
    var Circle = function(e){
        e.append("<img src='img/circle.png'/>");
        GameArr[parseInt(e.attr('id'),10)] = "O";
        isWinner();
    };

    

   
    $(".box").hover(function(){
        $(this).css("background-color", "blue");
        },
        function(){
            $(this).css("background-color", "white");
    });

    $(".box").click(function()
    {
        var e = $(this);
        if(e.html() == "")
        {
            if(Turn == "X")
            {
                Cross(e);
                Turn = "O";
            }
            else{
                Circle(e);
                Turn = "X";
            }
        }
        
    });

});