---
layout: default
title: DengYueMed
nav_exclude: true
---

<h1 style="margin-bottom: 8px;">DengYueMed</h1>

<p style="font-size:18px; margin-top:0; margin-bottom:30px; color:#555;">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr style="margin-bottom:40px;">

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: start;">

<div>

<h2>Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div style="background:#f8f9fa; padding:24px; border-radius:8px; border:1px solid #e5e5e5;">

<h3 style="margin-top:0;">
  <a href="{{ featured.url }}">{{ featured.title }}</a>
</h3>

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

<h2>Market Watch</h2>

<div style="background:#f8f9fa; padding:20px; border-radius:8px; border:1px solid #e5e5e5;">

<ul style="margin:0; padding-left:18px;">
  <li>FDA Approvals</li>
  <li>EMA Decisions</li>
  <li>China NMPA Updates</li>
  <li>Rare Disease Policy</li>
</ul>

</div>

</div>

</div>

<hr style="margin:50px 0;">

<h2>Latest Research Notes</h2>

<ul>
{% for post in site.posts offset:1 limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> — {{ post.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

<hr style="margin:50px 0;">

<h2>Coverage Areas</h2>

<ul>
  <li><a href="/oncology/">Oncology</a></li>
  <li><a href="/rare-diseases/">Rare Diseases</a></li>
  <li><a href="/supply-chain/">Supply Chain</a></li>
  <li><a href="/regulatory/">Regulatory</a></li>
</ul>
