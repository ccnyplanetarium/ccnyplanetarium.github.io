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
