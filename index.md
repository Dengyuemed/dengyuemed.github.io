---
layout: default
title: DengYueMed
nav_exclude: true
---

# DengYueMed

### Independent Intelligence on Global Oncology & Rare Disease Markets

---

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: start;">

<div>

## Lead Analysis

{% assign featured = site.posts.first %}

<div style="background:#f8f9fa; padding:24px; border-radius:8px; border:1px solid #e5e5e5;">

<h2 style="margin-top:0;">
  <a href="{{ featured.url }}">{{ featured.title }}</a>
</h2>

<p>
  <em>{{ featured.date | date: "%B %d, %Y" }}</em>
</p>

<p>
  {{ featured.excerpt }}
</p>

<p>
  <a href="{{ featured.url }}"><strong>Read Full Analysis →</strong></a>
</p>

</div>

</div>

<div>

## Market Watch

<div style="background:#f8f9fa; padding:20px; border-radius:8px; border:1px solid #e5e5e5;">

- FDA Approvals  
- EMA Decisions  
- China NMPA Updates  
- Rare Disease Policy  

</div>

</div>

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
