---
layout: default
title: DengYueMed
nav_exclude: true
---

# DengYueMed

### Independent Intelligence on Global Oncology & Rare Disease Markets

---

## 🔬 Lead Analysis

{% assign featured = site.posts.first %}

<div class="featured-box">

<h2><a href="{{ featured.url }}">{{ featured.title }}</a></h2>

<p><em>{{ featured.date | date: "%B %d, %Y" }}</em></p>

<p>{{ featured.excerpt }}</p>

<p><a href="{{ featured.url }}"><strong>Read Full Analysis →</strong></a></p>

</div>

---

## Latest Research Notes

<ul>
{% for post in site.posts offset:1 limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> — {{ post.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

---

## Coverage Areas

- [Oncology](/oncology/)
- [Rare Diseases](/rare-diseases/)
- [Supply Chain](/supply-chain/)
- [Regulatory](/regulatory/)
