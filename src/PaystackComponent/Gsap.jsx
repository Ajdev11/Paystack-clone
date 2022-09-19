/*
gsap (greensock animation platform whuch is a javascriot library for animation). gsap is a higher transition animation tool from css
that allows you to perfrom cool anaimtions in javascript. 
step1: go to gsap3 on google and copy the gsap core url
     add a csspluginrule url
step2: create a script tags src and paste the url from the gsap core
starting simple 1.0
step1: craete another script tag and write your gsap functions
step2: gsap.from('.class/div/id', {opacity:0, duartion:1, y:-50}) this allows it to move from up to down
step3: gsap.to('.class/div/id', {opacity:0, duartion:1, y:-50}) this allows it to move from down to up
for more complex animations
step1: gsap.from(".img", {duration:1, opacity:0, delay: 1.1})
step2: gsap.from(".aside", {duration:1, opacity:0, y:30, backgroundPosition: 200px 0px, delay: 1.4})

to make it stagger one after the other, we target the image class or div classses and add a stagger example below
step1: gsap.from('.anim1', {duration:1, opacity:0, y:-50, stagger:0.6})

for more undeestanding of gsap, if we want toadjust a value of a propert, rather letting it affect the rest, we 
can just make use of the timeline rule, tl......example below:
the advantage of using the timeline is so that we can change a value without having to worry about changing 
everything else

<script>
let rule= CSSRulePlugin.getRule("span:after");

let tl = gsap.timeline({defaults:{duartion:1}})

tl.from(".anim1", {y:-50, stagger:.6, opacity:0})
   .to(rule, {duration:1.8, cssRule: {scaleY:0}}, "-=2.2")
   .from(aside, {backgroundPosition:"200px 0px", opacity:0}, "-=1.5")
    .from('image', {y:50, opacity:0}, '-=.5')


for reversal when we click o the call to action button, we can have 

document.getelementbyid('cta).addeventlistener('click', ()=>{
    tenary operator
    tl.reversed() ? tl.play() : tl.reverse();
})
 Also, we can use another method such as ; also prevents it from overlapping

 let tl = gsap.timeline()
    tl.from("target", {variables})
     tl.to("target", {variables})


</script>





















*/