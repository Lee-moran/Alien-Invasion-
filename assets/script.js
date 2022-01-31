/*** Getting the element by id 
 * assigning the gap an event listener so the animation can run every time.
 * we want to change the height and make it random.
 */ 
let tower = document.getElementById("tower");
let gap = document.getElementById("gap");

/*** Puts the gap somewhere in the middle
 ** gap has a random position 
 * animation to be repeated 
 */
gap.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    gap.style.top = random + "px";

});