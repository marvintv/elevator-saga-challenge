/* Challenge #1
   Added a single floor to handle the elevator on idle.

   Challenge #2 
   Added another two floors to the code to account for floors 0 to 4

   Challenge #3 
   No Changes

   Challenge #4
   Handled two elevator objects, which traversed from floors 0 to 7
   Added the  floor_button_pressed listener event for both elevators, which went to floorNum with priority.

*/
{

    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator2 = elevators[1]; // second elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2); 
            elevator.goToFloor(3); 
            elevator.goToFloor(4);
            elevator.goToFloor(5);
            elevator.goToFloor(6);
            elevator.goToFloor(7);
        });

        elevator2.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator2.goToFloor(0);
            elevator2.goToFloor(1);
            elevator2.goToFloor(2); 
            elevator2.goToFloor(3); 
            elevator2.goToFloor(4);
            elevator2.goToFloor(5);
            elevator2.goToFloor(6);
            elevator2.goToFloor(7);
        });


        elevator.on("floor_button_pressed", function(floorNum) {elevator.goToFloor(floorNum, true)} );
        elevator2.on("floor_button_pressed", function(floorNum) {elevator2.goToFloor(floorNum, true)} );


    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}