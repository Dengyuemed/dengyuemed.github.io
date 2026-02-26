---
layout: default
title: DengYueMed
---

# DengYueMed

Independent Analysis on Global Oncology, Rare Disease Markets and Cross-Border Drug Access.

---

## Featured Insight

{% assign featured = site.posts.first %}

### 🔬 [{{ featured.title }}]({{ featured.url }})

*{{ featured.date | date: "%B %d, %Y" }}*

> {{ featured.excerpt }}

[Read Full Article →]({{ featured.url }})

---

## Latest Articles

<ul>
{% for post in site.posts offset:1 limit:6 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> — {{ post.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

---

## Browse by Category

- [Oncology](/oncology)
- [Rare Diseases](/rare-diseases)
- [Supply Chain](/supply-chain)
- [Regulatory](/regulatory)

---

## About DengYueMed

DengYueMed focuses on global pharmaceutical industry analysis, cross-border drug access, oncology and rare disease market insights.
