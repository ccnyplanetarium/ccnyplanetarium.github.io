---
layout: page
title: Contact and Location
description: How to find us or get in touch
sitemap:
    priority: 0.7
    lastmod: 2018-10-21
    changefreq: weekly
---

## Contact

You can always send us an email at:

<script type="text/javascript">
  emailE = 'ccny.cuny.edu'
  emailE = ('planetarium' + '@' + emailE)
  document.write('<A href="mailto:' + emailE + '">' + emailE + '</a>')
</script>


Or, send a message on one of our social platforms:

<div class="col-sm">
  <ul class="list-unstyled icons alt">
    {%- if site.facebook_username -%}
    <li><a href="https://facebook.com/{{site.facebook_username}}" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
    {%- endif -%}
    {%- if site.instagram_username -%}
    <li><a href="https://instagram.com/{{site.instagram_username}}" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
    {%- endif -%}
    {%- if site.twitter_username -%}
    <li><a href="https://twitter.com/{{site.twitter_username}}" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
    {%- endif -%}
    {%- if site.github_username -%}
    <li><a href="https://github.com/{{site.github_username}}" class="icon fa-github"><span class="label">Github</span></a></li>
    {%- endif -%}
  </ul>
</div>

## Directions

We are located in the basement of the Marshak Science Building, on the City College Campus.

[Google Map link](https://www.google.com/maps/place/CCNY+Planetarium/@40.818862,-73.951317,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f7adc1de0acf:0xfb928a383cd77c13!8m2!3d40.818862!4d-73.9491283)

Here is a map of the building showing the rough location of the room:


<figure class="figure col-12">
  <img src="{{ "assets/images/map-to-ccny-planetarium.jpg" | absolute_url }}" class="figure-img img-fluid rounded" alt="CCNY planetarium location">
  <figcaption class="figure-caption">Map of Ground Floor of the Marshak Building</figcaption>
</figure>
