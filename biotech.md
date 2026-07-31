---
layout: page
title: Biotech
permalink: /biotech/
description: Strategic intelligence on biotechnology innovation, drug discovery, AI drug development, gene therapy, cell therapy and next-generation pharmaceutical technologies.
---

# Biotech Intelligence

Focused analysis of global biotechnology innovation, next-generation drug discovery, gene and cell therapies, AI-powered pharmaceutical research, protein degradation technologies and emerging life science trends.

---

> Biotechnology is reshaping the future of medicine.
> AI drug discovery, gene editing, cell therapy, PROTACs, RNA therapeutics and synthetic biology are driving the next wave of pharmaceutical innovation.

---

{% assign posts = site.posts | where: "categories", "biotech" | sort: "date" | reverse %}

{% if posts.size > 0 %}

{% for post in posts limit:20 %}

## [{{ post.title }}]({{ post.url }})

<small>{{ post.date | date: "%B %d, %Y" }}</small>

{{ post.description }}

---

{% endfor %}

{% else %}

_No biotechnology intelligence articles have been published yet._

{% endif %}
