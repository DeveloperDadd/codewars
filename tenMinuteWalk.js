/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity
to go for a short walk. The city provides its citizens with a Walk Generating App on their 
phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes
you one minute to traverse one city block, so create a function that will return true
if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point.
Return false otherwise.
*/

function isValidWalk(walk) {
    // Check if the walk has exactly 10 minutes
    if (walk.length !== 10) {
        return false;
    }

    // Initialize counters for horizontal and vertical movements
    let horizontal = 0;
    let vertical = 0;

    // Iterate through the walk and update counters
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                vertical++;
                break;
            case 's':
                vertical--;
                break;
            case 'e':
                horizontal++;
                break;
            case 'w':
                horizontal--;
                break;
            default:
                // Invalid direction
                return false;
        }
    }

    // Check if the walk returns to the starting point
    return horizontal === 0 && vertical === 0;
}
