---
layout: page
title: Science Visualization
description: Learn about how we visualize science.
permalink: /sci-vis/
sitemap:
    priority: 0.7
    lastmod: 2022-03-29
    changefreq: weekly
---

## Science Visualization

We specialize in turning scientific data into memorable and informative visualizations. Here we will collect some posts about our processes and work.


<div class="row mt-3">


<div class="card-columns">
    {% for post in site.tags.scivis offset:0 limit:5 %}
      {% if post.tags contains 'scivis' %}
      <div class="card border-dark">
        <img class="card-img-top" src="{{ post.image | relative_url }}" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-text">{{ post.date | date_to_string }}</h6>
          <h5 class="card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h5>
          <p class="card-text">{{ post.excerpt }}</p>
        <a href="{{ post.url | absolute_url }}" class="btn btn-primary">Read More</a>
      </div>
    </div>
      {% endif %}
  {% endfor %}

</div>

</div>
