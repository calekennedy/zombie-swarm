********************************************************************************
WHAT THIS IS
********************************************************************************

This is a stress/load tester for arbitrary websites.

Run this test using node zombie-swarm.js

This will execute the program and spawn however many zombies you have specified.

Each zombie is a headless browser and is capable of accessing a DOM (and more).

These zombies can be wrapped up with async to better control the horde.

Additionally, you can probably use this technique to check for brute force 
attack vulnerabilities.



********************************************************************************
DEPENDENCIES
********************************************************************************

1. [zombie.js](https://github.com/assaf/zombie)

2. [async.js](https://github.com/caolan/async)



********************************************************************************
HOW TO USE
********************************************************************************

1. install [node.js](http://nodejs.org) and [npm.js](https://npmjs.org/)

2. cd zombie-swarm 

3. npm install

4. hack the zombie-swarm.js file to meet your criteria, it's pretty simple.

5. run node zombie-swarm.js



