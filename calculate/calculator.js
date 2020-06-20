$(document).ready(function() {


    // Variables needed
    var pii = 3.14;
    var number1 = "";
    var number2 = "";
    var operator = "";
    var firstNumber = true;
    var result;
    
    
    
    //Building functions for number keys
    
    $(".number").on("click", function(){
        if (firstNumber){
            number1 += $(this).attr("value");
            $("#first").html(number1);
        }
        else  {
            number2 += $(this).attr("value");
            $("#second").html(number2);
        }

    
    });
    
    
    
    //Building functions for operations
    
    
    $(".operator").on("click", function(){
        firstNumber = false;
          if ( operator = $(this).attr("value"));
            $("#operator").html($(this).text());
        
        });


   
        

     
    $(".equal").on("click", function (){

        number1 = parseInt(number1);
        number2 = parseInt(number2);

       

       if (operator == "plus"  ) {
           
           result = number1 + number2;

    } 

       else if (operator == "minus"  ) {
        result = number1 - number2;

    }

        else if (operator == "times"  ) {
        result = number1 * number2;

    }   

        else if (operator == "divide"  ) {
        result = number1 / number2;

    }  

    
     $("#result").html(result.toFixed(2));

     

     


        });


        $(".clear").on("click", function()
        {
            $(".data").remove();

            location.reload();

            

        })
        




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });