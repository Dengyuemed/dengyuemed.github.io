---
layout: page
title: Supply Chain
permalink: /supply-chain/
description: Pharmaceutical supply chain intelligence including API production, biologics manufacturing and global distribution networks.
---

# Pharmaceutical Supply Chain Insights

Analysis of manufacturing capacity, API ecosystems and international logistics strategy.

---

{% assign posts = site.categories["supply-chain"] %}

{% if posts and posts.size > 0 %}

{% for post in posts %}

## [{{ post.title }}]({{ post.url }})

<small>{{ post.date | date: "%B %d, %Y" }}</small>

{{ post.description }}

---

{% endfor %}

{% else %}

_No supply chain research notes published yet._

{% endif %}
