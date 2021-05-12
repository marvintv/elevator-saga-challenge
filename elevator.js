/* Challenge #1
   Added a single floor to handle the elevator on idle.
   Challenge #2 
   Added another two floors to the code to account for floors 0 to 4
   Challenge #3 
   No Changes
   Challenge #4
   Handled two elevator objects, which traversed from floors 0 to 7
   Added the  floor_button_pressed listener event for both elevators, which went to floorNum with priority.
   Challenge #5
   intitilized numOfElevators and numOfFloors to a var. We traversed through each elevator using a for loop. Added a for loop for going through floors because num was changing.
   Challenge #6
   Set elevator to go to level 0 when idle.  Added a listener event for passing_floor and prioritized it. 
   Challenge #7 
   No changes
*/

{

    init: function(elevators, floors) {
        console.clear();
        var numOfElevators = elevators.length;
        var numOfFloors = floors.length; 


        for (var i = 0;  i < numOfElevators;  i++){ // looping through elevators
            let elevator = elevators[i];

            elevator.on("idle", function() {
                console.log("Elevator: " + i);
                elevator.goToFloor(0);
            });
            // floor button pressed
            elevator.on("floor_button_pressed", function(floorNum) {
                console.log("floor pressed. Floor num: " + floorNum);
                elevator.goToFloor(floorNum)
            } );

            // passing floor
            elevator.on("passing_floor", function(floorNum, destinationDirection) {
                if (elevator.loadFactor() < 1){
                    elevator.goToFloor(floorNum, true);

                }
            });

            for (var f = 0; f < numOfFloors; f++) {
                var floor = floors[f];
                floor.on("up_button_pressed down_button_pressed", function() {
                    elevator.goToFloor(f);
                });
            }




        } // end elevator loop



    }, 
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}