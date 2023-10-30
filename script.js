const quotesTxt = 
`It's the pretty boys versus the petty boys
Houston they get me though, European my vehicle
They say love's like a BBL, you won't know if it's real until you feel one
Man got flown like private jets for way way less
Still steppin' like Omega Psi Phi for mine
At the table praying banker shows a natural 9, It never happens half the time
Had to pull my niggas out the mud like I'm training marines
I feel like lately it went from top 5 to remaining 5
Cris' bottle sender, check-picker-upper
The part I love most is they need me more than they hate me
As luck would have it, I've settled into my role as the good guy
Live a little, 'cause niggas die a lot
Please excuse my table manners, I was making room for the table dancers
You need to act your age and not your girl's age
I'm a bill printer, I'm a grave digger
I'll probably self-destruct if I ever lose but I never do
That was back in the days, Acura days
Is it the fall? Time for me to revisit the past
She says "You're such a dog," I say "You're such a bone"
Looking for the right way to do the wrong things
I'm honest, I make mistakes, I'd be the second to admit it
I just set the bar, niggas fall under it like a limbo
Your mama used to live at the church on Sunday, you just go to LIV after church on Sunday
I've been stacking up like I'm fundraising
It's supposed to be a lot of hard working goin' on, but who the fuck could focus with this twerking goin' on?
Drinkin', smokin', fuckin', plottin, schemin', plottin', schemin', gettin' money
Your lack of effort got me rapping different
Yours truly, the boy
Cashmere knits for the nighttime boat rides
Friends in high places and friends that are high still
Still managed to moonwalk straight through a minefield`

const quotes = quotesTxt.split("\n");
outputRandomQuote(quotes);

function outputRandomQuote(quotesArray) {
    var numberOfQuotes = (quotesArray.length);
    var x = getRandomIntInclusive(0, numberOfQuotes - 1); 
    document.getElementById("quote").innerHTML = quotesArray[x].toUpperCase();
}

function getRandomIntInclusive(min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
