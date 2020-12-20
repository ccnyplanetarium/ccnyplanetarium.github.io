---
layout: post
title:  "An Allsky/360 Virtual Great Conjunction History"
date: 2020-12-20
excerpt: "Everyone is saying this one is special. But, how does it compare to previous Great Conjunctions?"
image: "assets/images/great-conjunctions-all-sky-500px.jpg"
author: "James Hedberg"
categories: posts
---

It seems like every month, there another astronomical event that gets tagged with lines like _not until 3045 will you see this again_, or _first time in centuries_, etc. The Great Conjunction 2020 of Jupiter and Saturn is no different. This is the closest they will have been since 1623, and the first time such a close conjunction has been visible in the night sky since 1226. But, what's the big deal with 6.1 arcminutes? How close is that compared to others?

We looked at the historical record and made a visualization that shows exactly how this this conjunction compares to others. For example, there was a great conjunction just 20 years ago, in 2000. But, during that one, Jupiter and Saturn were separated by 68.9 arcminutes. That over a degree (60 arcminutes = 1 degree). The full moon is about half a degree (30 arcminutes), so a separation of 1 degree is not going to be that exciting. A little exciting, but not that much.

This year, they will only be separated by about 1/10 of a degree, or 6.1 arcminutes. And so, unless you've spent years measuring the positions of things in the sky, that number doesn't mean much. That's why we wanted to show what some of the recent Great Conjunctions would have looked like, and thanks to some very long term planetary data from NASA/JPL, we can with fairly high precision, show what they would have looked like centuries ago. For example, the 1623 conjunction, in which they were 5.2 arcminutes apart would have been pretty cool.

And even cooler, during the 1226 conjunction, which would have been visible (unless is was cloudy), the two gas giants were separated by only 2.1 arcminutes.

With any further delay, here is the 360 viz. Use your mouse move the view around. (the link is right below for a full page version)

<div class='embed-container'>
<iframe width="560" height="315" src="https://ccnyplanetarium.org/dynamic-sims/pano/jupiter-saturn-historical.html" frameborder="0" allow="accelerometer; gyroscope;" allowfullscreen></iframe>
</div>

<br>

Find the different conjunctions. Notice that for many, the planets never overlap really. That's what's special about this one.

---

Here's a link to the full-page/full-screen version: [360 Great Conjunction Historical Visualization](https://ccnyplanetarium.org/dynamic-sims/pano/jupiter-saturn-historical.html)

It should work great on phones, cardboard VR, or probably a real VR system. (You might have to allow the simulation to access your phones motion sensors. )

---

Each dot represents one day's observations. For each conjunction, days are shown 2 weeks before and after the main conjunction event, with weekly highlights indicated by the emphasized points.

We can show some projections of the 360 image as well. Though, they are less fun.

{%
include figure.html
max-width="900px"
file="great-conjunction-2020/great-conjunctions-all-sky-airy.jpg" alt="great conjunction historical all sky - airy projection"
caption="A 2d projection showing a portion of the all sky image [CC-BY: J.Hedberg/CCNYPlanetarium]"
%}

---

And some technical details of course.

- The simulation was rendered with [OpenSpace](https://www.openspaceproject.com/)

- The location of the simulation is Santa Fe, NM. Other locations would see the similar motions, but their paths would be rotated w.r.t the horizon depending on the latitude.

- Historical Planetary Ephemera come from the  JPL/NASA [NAIF](https://naif.jpl.nasa.gov/naif/data_generic.html). [ `de431_part-1.bsp` and `de431_part-2.bsp` to be exact.]

- We used the already tabulated data for angular separations from [Dr. Hartigan](https://sparky.rice.edu/public-night/jupsat2.html). Thank you!

- For the sake of clarity, we chose different times of day to display the different conjunctions. This means they might not be shown in the exact location there where in at the time when they were observable. This prevents some from crossing and overlapping with others. The point here is to show the differences in conjunctions. For very accurate time-stamped visuals, see [this post](https://ccnyplanetarium.org/posts/2020/12/09/jupiter-saturn-conjunction-2020.html)

- Not all the conjunctions shown were visible during the night either, i.e. the 1623 conjunction happened during day light hours so it would have been hard to see. Not impossible, but hard.

- 360 rendering and VR environment done with [A-Frame](https://aframe.io/). It's cool.

---

### About the author

Dr. Hedberg studied the ancient cosmologies of Ptolemy, Tycho, and Kepler as an undergrad at St. John's College (Santa Fe) as part of the Program's [Mathematics tutorial](https://www.sjc.edu/academic-programs/undergraduate/classes/mathematics-tutorial), though the college didn't have this [beautiful tool](https://www.sjc.edu/news/armillary-sphere-unveiled-santa-fe-campus) when he attended there. Since then, his work in programming and science visualization sometimes takes delightful detours into the past, present and future.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Having trouble making it through another zoom meeting?<br><br>Make a sand mandala. Find peace.<a href="https://t.co/CNI0kedU3S">https://t.co/CNI0kedU3S</a><br><br>It&#39;s even been kid-tested so you can let them explore some abstract concepts of symmetry with it. <br><br>Built with <a href="https://twitter.com/p5xjs?ref_src=twsrc%5Etfw">@p5xjs</a> <a href="https://twitter.com/hashtag/creativecoding?src=hash&amp;ref_src=twsrc%5Etfw">#creativecoding</a> <a href="https://twitter.com/hashtag/art?src=hash&amp;ref_src=twsrc%5Etfw">#art</a> <a href="https://t.co/XNfG7vindi">pic.twitter.com/XNfG7vindi</a></p>&mdash; James Hedberg (@jameshedberg) <a href="https://twitter.com/jameshedberg/status/1329783146200567810?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
