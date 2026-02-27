---
layout: default
title: DengYueMed
nav_exclude: true
---

<h1 style="margin-bottom:6px;">DengYueMed</h1>

<p style="font-size:18px; margin-top:0; margin-bottom:35px; color:#555;">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr style="margin-bottom:50px;">

<div style="display: grid; grid-template-columns: 3fr 2fr; gap: 50px; align-items: start;">

<!-- LEFT COLUMN -->
<div>

<h2 style="margin-top:0;">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div style="background:#f8f9fa; padding:28px; border-radius:10px; border:1px solid #e5e5e5;">

<h2 style="margin-top:0; font-size:22px;">
  <a href="{{ featured.url }}" style="text-decoration:none;">
    {{ featured.title }}
  </a>
</h2>

<p style="color:#777; margin-top:5px;">
  <em>{{ featured.date | date: "%B %d, %Y" }}</em>
</p>

<p style="margin-top:15px;">
  {{ featured.excerpt }}
</p>

<p style="margin-top:20px;">
  <a href="{{ featured.url }}"><strong>Read Full Analysis →</strong></a>
</p>

</div>

</div>

<!-- RIGHT COLUMN -->
<div>

<h2 style="margin-top:0;">Market Watch</h2>

<div style="background:#f8f9fa; padding:24px; border-radius:10px; border:1px solid #e5e5e5;">

<ul style="margin:0; padding-left:18px; line-height:1.9;">
  <li>FDA Approvals</li>
  <li>EMA Decisions</li>
  <li>China NMPA Updates</li>
  <li>Rare Disease Policy</li>
</ul>

</div>

</div>

</div>

<hr style="margin:60px 0;">

<h2>Latest Research Notes</h2>

<ul style="line-height:1.8;">
{% for post in site.posts offset:1 limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small style="color:#777;"> — {{ post.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

<hr style="margin:60px 0;">

<h2>Coverage Areas</h2>

<ul style="line-height:1.8;">
  <li><a href="/oncology/">Oncology</a></li>
  <li><a href="/rare-diseases/">Rare Diseases</a></li>
  <li><a href="/supply-chain/">Supply Chain</a></li>
  <li><a href="/regulatory/">Regulatory</a></li>
</ul>
