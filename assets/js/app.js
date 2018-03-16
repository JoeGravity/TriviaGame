
$(document).ready(function () {

    $("#quizBox").hide();
    $("#scorebox").hide();

    // var answers = ["q1a", "q2b", "q3c", "q4d"];


    //--------------------------------------------------------------------

    //  Set our number counter to 100.
    var number = 5;
    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        // hide button
        $("#start").hide();
        // show quiz
        $("#quizBox").show();
        //start timer
    }

    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        number--;
        //  Show the number in the #show-number tag.
        $("#timeLeft").html("<h2>" + number + "</h2>");

        //  Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            mssg = "Time’s Up!";
            // call score tally ƒ)
            tally();
        }
    }

    //  The stop function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    //--------------------------------------------------------------------


    // add up & show scores(ƒ)
    function tally() {

        // // hide quiz
        // $("#quizBox").hide();

        // add up & show scores(ƒ)
        $("#scorebox").show();
        $("#annc").text(mssg);
        // check quiz answers 
        // set initial score
        var correct = 0;
        var incorrect = 0;
        var missing = 0;

        /*     // loop thru guesses q1-q4       
                for (var i = 1; i < 5; i++) {
                var guesses = $('#q' + i);
                console.log(guesses);
        
                // set j as guess "array" index value, loop thru all
               for (var j = 0; j < guesses.length; j++) {
                    console.log(j);
        
                    var radio = guesses[j];
                    // if guesses (id #q1-q4) match answers
                    if (radio.value == "right" && radio.checked) {
                        // add to total
                        correct++;
                        // write total to #wahr
                        $('#wahr').text(correct);
                    }
                     // if guesses (id #q1-q4) don't match answers (var array)
                    if (radio.value == "wrong" && radio.checked) {
                        // add to total
                        incorrect++;
                        // write total to #falsch
                        $('#falsch').text(incorrect);
                    }
                    // otherwise if guesses (id #q1-q4) are blank
                    else {
                        // add to total
                        missing++;
                        // write total to #missed
                        $('#missed').text(missing);
                    }
                    // show reset button "play again"
                    $('#scoreBox').append('<button id="resetGm" type="submit">Play Again!</button>'); 
                }
            }*/
        }


        //  When the Start button gets clicked, execute the run function.
        $("#start").on("click", run);
        // $("#start").click(function () {

        // if quiz "done" button clicked before time up,
        $('#done').click(function () {
            // stop timer
            stop();
            // show "You finished early!"
            mssg = "You finished early!";
            tally();
            // add up & show scores(ƒ)
        });

    });