/* Challenge #1
   Added a single floor to handle the elevator on idle.

   Challenge #2 
   Added another two floors to the code to account for floors 0-4

   Challenge #3 
   No Changes

   Challenge #4
   Handled two elevators and put it inside a for loop. 
   Added the listener event for floor_button_pressed and went to that floorNum with priority, and transversed through floors 0-7.

*/
{

    init: function(elevators, floors) {

        for (var i = 0;  i < 2;  i++){
            let elevator = elevators[i];
            elevator.on("idle", function() {
                elevator.goToFloor(0);
                elevator.goToFloor(1);
                elevator.goToFloor(2); 
                elevator.goToFloor(3); 
                elevator.goToFloor(4);
                elevator.goToFloor(5);
                elevator.goToFloor(6);
                elevator.goToFloor(7);
            });

            elevator.on("floor_button_pressed", function(floorNum) {elevator.goToFloor(floorNum, true)} );

        }
        // var elevator = elevators[0]; // Let's use the first elevator
        // var elevator2 = elevators[1]; // second elevator

        // // Whenever the elevator is idle (has no more queued destinations) ...
        // elevator.on("idle", function() {
        //     // let's go to all the floors (or did we forget one?)
        //     elevator.goToFloor(0);
        //     elevator2.goToFloor(1);
        //     elevator2.goToFloor(2); 
        //     elevator2.goToFloor(3); 
        //     elevator2.goToFloor(4);
        //     elevator2.goToFloor(5);
        //     elevator2.goToFloor(6);
        //     elevator.goToFloor(7);
        // });

        // elevator2.on("idle", function() {
        //     // let's go to all the floors (or did we forget one?)
        //     elevator2.goToFloor(0);
        //     elevator2.goToFloor(1);
        //     elevator2.goToFloor(2); 
        //     elevator2.goToFloor(3); 
        //     elevator2.goToFloor(4);
        //     elevator2.goToFloor(5);
        //     elevator2.goToFloor(6);
        //     elevator2.goToFloor(7);
        // });




    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}