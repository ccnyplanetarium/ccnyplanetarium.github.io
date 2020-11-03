---
layout: post
title:  "Vizualizing Ancient Star Catalogs"
date: 2020-11-02
excerpt: "Sci Viz with 2000 year old data"
image: "assets/images/ancient-sky-maps-500.jpg"
author: "James Hedberg"
categories: posts
---

It's often said that astronomy is the oldest science. That must mean they had some data? Right? What's science without data. Here we look at visualizing some of the oldest data sets from astronomy.

## Cladius Ptolemy - _The Almagest_

First up is Ptolemy's Catalog of Stars from his book Μαθηματικὴ Σύνταξις otherwise known as The Almagest. In addition to laying out and entire cosmological system rooted in Euclidean Geometry, Ptolemy also included a catalog of 1022 'fixed stars', listing their positions (ecliptic latitude and longitude) as well as a data point indicating the star's apparent brightness (on a scale of 1-6, 1 being the brightest).

{%
include figure.html
max-width="1280px"
file="almagest_ursa_major.png" alt="Almagest Facsimile, Ursa Major"
caption="The stars from the constellation Ursa Major, with Lat, Long, and Brightness"
%}

Much work has already been done analyzing these tables of star positions - our task here is not to dig too deep into the data set and its artifacts, but rather to make a compelling visualization. Several technical issues arise when trying to do so. First, we can't just throw a 500 year old scanned image at a piece of software and have it turn it into a picture. A dedicated individual needs to type all those numbers up into a machine readable file. Of course I'd be up for it, but it's been done [before](http://www.etwright.org/astro/almagest.html) in several places. (Graßhoff, 1990; Ptolemy, G. J. Toomer 1984)

Next, we have to understand what the numbers are indicating. For Ptolemy, the most natural system of measurements involved using the degrees above and below the ecliptic plane, and the degrees east or west of the vernal equinox - the location in the sky where the ecliptic plane crosses the celestial equator. The tricky thing is that due to orbital precession, this position changes about 1 degree every 72 years. So, we need to know _when_ Ptolemy made these measurements in order to convert them the modern epoch. Again, fortunately, this has been done. (Peters, 1915) The best estimate for which equinox to use has been figured out to be 58 AD.  

So, now we can transform this table of data into something modern sci-viz software can work with. With a little help from `astropy.coordinates`, this task is a breeze. (Full script in the [GitHub Repo](https://github.com/ccnyplanetarium/addons/tree/master/historical-star-catalogs)) Here at the CCNY Planetarium, we use [OpenSpace](https://www.openspaceproject.com/) to do our simulations, which can read in a table of X,Y,Z positions for a star catalog and make nice little stars in the right place in sky.

{%
include figure.html
max-width="800px"
file="almagest_stars_around_earth.jpg" alt="Almagest stars "
caption="All the stars from The Almagest shown around the Earth"
%}

Now, several things are immediately obvious. Most notably, all the stars are the same distance away from the Earth. We now know the stars are not equidistant from the earth, but back in the Ptolemy's time, they had a different cosmological model in which all the stars where indeed the same distance from the Earth, and much too close. However, we can begin to see the beauty in the data here. Look closely just above the center of the image and you'll see the familiar Big Dipper (or Plough) asterism, part of the constellation of Ursa Major. Stop and marvel in the fact that you're looking at a dataset from almost 2000 years ago. Seriously. Just stop and marvel at it.

Another artifact of the data, is that there are no stars towards the bottom, surrounding the southern pole. Of course there are plenty of stars there, the problem was that that region wasn't visible from Ptolemy's location in Egypt.

{%
include figure.html
max-width="800px"
file="almagest_stars_no_southern_skies.png" alt="Almagest stars "
caption="No Southern Skies in this catalog"
%}


Despite its imperfections (only visible really from our modern vantage point), the importance of this 'database' for the development of astronomy cannot be overstated. It remains the oldest table of such data and was used for centuries to help understand the motions of the heaven. And then, a new astronomer came on the scene.

## Tycho Brahe + Johannes Kepler - _Tabulae Rudolphinae_

Tycho was from Denmark, and he had a passion for all things exact. Among his numerous contributions to the development of science, and there were many, was a new catalog of stars. The technology he invented to make the observations is an [entire story in itself](https://www2.hao.ucar.edu/Education/FamousSolarPhysicists/tycho-brahes-observations-instruments). For our purposes, we'll refrain from telling that story (except for mentioning he had an entire castle constructed on an island for making astronomical measurements), and stick to the task at hand.

We can find his data in accessible formats thanks to many scholars' contributions, including none other than Johannes Kepler, who published the Tycho data sets in 1627 as part of his Rudolphine Tables, a collection of data sets for stars and planets. (F. Verbunt &amp; R. H. van Gent, 2010)


{%
include figure.html
max-width="600px"
file="tycho_kepler_fixed_stars.jpg" alt="The Tycho/Kepler Data Set"
caption="The Catalog of Fixed Stars showing, again, the listing for Ursa Major"
%}

Using a similar method as above, with some minor modifications due to the way the data is structured, we can transform these manuscripts to a data format we can work with. Others have already done most of the heavy lifting, we just have to run some coordinate transforms and data format fixes and voila:


{%
include figure.html
max-width="600px"
file="both_almagest_tycho_star.jpg" alt="The Ptolemy and Tycho Data Sets"
caption="Ptolemy and Tycho Star Catalogs"
%}

And now, thanks to the powers of OpenGL we can see these catalogs from the vantage point of the earth. Here's a quick animation showing the evolution of the data sets from the vantage point of the surface of the earth.

<div class='embed-container'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Wf9GbnnxenQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


It's easy to see the transition fromt the Modern Hipparcos Catalog to Ptolemy's. His data had plenty of systematic and acute errors. And then, again from Ptolemy to Tycho, the deltas are obvious. However, during the fade from Tycho back to Hipparcos, it's nearly impossible within the presented field of view to see the difference (for many stars). The errors and history of these data sets has been explored very thoroughly in the literature and make for great studies in the history of science and data. But, visualizing them in an immersive planetarium experience is about as close to time travel as we can get.

Stay tuned to our channels, since we'll likely have some shows featuring this material when we return to in-person formats.



---

Further Reading and References:

Graßhoff:
[The History of Ptolemy’s Star Catalogue](https://www.springer.com/gp/book/9780387971810)
Gerd Graßhoff, Springer-Verlag New York, 1990

Peters:
[Ptolemy's catalogue of stars: a revision of the Almagest](https://archive.org/details/cu31924012300491)
Ptolemy, 2nd cent; Peters, Christian Heinrich Friedrich, 1813-1890; Knobel, E. B. (Edward Ball), b. 1841

Ptolemy/Toomer:
[Ptolemy's Almagest](https://www.google.com/books/edition/_/43XvAAAAMAAJ?hl=en&gbpv=0), Springer New York, 1984

F. Verbunt and R. H. van Gent: [Three editions of the star catalogue of Tycho Brahe](https://www.aanda.org/articles/aa/abs/2010/08/aa14002-10/aa14002-10.html) A&A Volume 516, June-July 2010

F. Verbunt and R. H. van Gent: [The star catalogues of Ptolemaios and Ulugh Beg](https://doi.org/10.1051/0004-6361/201219596) A&A
Volume 544, August 2012

[Seeing Ancient Stars](http://www.etwright.org/astro/almagest.html)

Almagest Manuscript:
[Library of Congress, Almagestū Cl. Ptolemei, 1515](http://hdl.loc.gov/loc.rbc/General.17936)

Kepler Manuscript:
[Library of Congress, Tabvlæ Rudolphinæ, 1627](http://hdl.loc.gov/loc.rbc/Rosenwald.1316.1)

The content is rendered using the open-source Astrovisualization framework [OpenSpace](https://openspaceproject.com) which is a collaboration between Linköping University, the American Museum of Natural History, Goddard's Community Coordinated Modeling Center, New York University, and the University of Utah.

---

### About the author

Dr. Hedberg studied the ancient cosmologies of Ptolemy, Tycho, and Kepler as an undergrad at St. John's College (Santa Fe) as part of the Program's [Mathematics tutorial](https://www.sjc.edu/academic-programs/undergraduate/classes/mathematics-tutorial), though the college didn't have this [beautiful tool](https://www.sjc.edu/news/armillary-sphere-unveiled-santa-fe-campus) when he attended there. Since then, his work in programming and science visualization has sometimes takes delightful detours into the past:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve always thought <a href="https://twitter.com/hashtag/Kepler?src=hash&amp;ref_src=twsrc%5Etfw">#Kepler</a>&#39;s nested solid model would be fun to animate. Though not based on what we would now deem &#39;physics&#39;, he must have nonetheless been pretty excited when he figured out these ratios. I get excited just watching. <a href="https://twitter.com/hashtag/historyofastronomy?src=hash&amp;ref_src=twsrc%5Etfw">#historyofastronomy</a> <a href="https://t.co/SOwPfWciTI">pic.twitter.com/SOwPfWciTI</a></p>&mdash; James Hedberg (@jameshedberg) <a href="https://twitter.com/jameshedberg/status/1301237872201281538?ref_src=twsrc%5Etfw">September 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
