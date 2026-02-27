---
layout: default
title: DengYueMed
nav_exclude: true
---

<div style="max-width:1100px; margin:auto; padding-top:20px;">

<h1 style="margin-bottom: 5px; font-size:36px;">DengYueMed</h1>

<p style="font-size:18px; color:#666; margin-top:0; margin-bottom:40px;">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr style="margin-bottom:50px;">

<!-- ===== HERO GRID ===== -->

<div style="display:grid; grid-template-columns: 2fr 1fr; gap:50px; align-items:start;">

<div>

<h2 style="margin-bottom:20px;">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div style="background:#ffffff; padding:28px; border-radius:10px; border:1px solid #e5e5e5; box-shadow:0 4px 12px rgba(0,0,0,0.04);">

<h3 style="margin-top:0; font-size:24px;">
  <a href="{{ featured.url }}" style="text-decoration:none;">
    {{ featured.title }}
  </a>
</h3>

<p style="color:#888; font-size:14px;">
  {{ featured.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:16px; line-height:1.6;">
  {{ featured.excerpt }}
</p>

<p style="margin-top:20px;">
  <a href="{{ featured.url }}" style="font-weight:600;">
    Read Full Analysis →
  </a>
</p>

</div>

</div>

<!-- ===== MARKET WATCH ===== -->

<div>

<h2 style="margin-bottom:20px;">Market Watch</h2>

<div style="background:#f7f8fa; padding:24px; border-radius:10px; border:1px solid #e5e5e5;">

<ul style="margin:0; padding-left:18px; line-height:1.8;">

<li><strong>FDA Approvals</strong><br>
<span style="font-size:14px; color:#666;">Recent oncology & rare disease approvals</span></li>

<li style="margin-top:15px;"><strong>EMA Decisions</strong><br>
<span style="font-size:14px; color:#666;">European regulatory milestones</span></li>

<li style="margin-top:15px;"><strong>China NMPA</strong><br>
<span style="font-size:14px; color:#666;">Accelerated pathways & policy signals</span></li>

<li style="margin-top:15px;"><strong>Rare Disease Policy</strong><br>
<span style="font-size:14px; color:#666;">Global orphan drug incentives</span></li>

</ul>

</div>

</div>

</div>

<hr style="margin:60px 0;">

<!-- ===== LATEST NOTES ===== -->

<h2 style="margin-bottom:25px;">Latest Research Notes</h2>

<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:30px;">

{% for post in site.posts offset:1 limit:4 %}

<div style="padding:20px; border:1px solid #eee; border-radius:8px; background:#ffffff;">

<h3 style="margin-top:0; font-size:18px;">
<a href="{{ post.url }}" style="text-decoration:none;">
{{ post.title }}
</a>
</h3>

<p style="font-size:13px; color:#888;">
{{ post.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:14px; line-height:1.6;">
{{ post.excerpt }}
</p>

</div>

{% endfor %}

</div>

<hr style="margin:60px 0;">

<!-- ===== COVERAGE ===== -->

<h2 style="margin-bottom:20px;">Coverage Areas</h2>

<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:20px;">

<a href="/oncology/" style="text-decoration:none;">
<div style="padding:20px; border:1px solid #eee; border-radius:8px; background:#fafafa;">
<h3>Oncology</h3>
<p style="font-size:14px; color:#666;">
Solid tumors, IO, ADCs, pipeline tracking
</p>
</div>
</a>

<a href="/rare-diseases/" style="text-decoration:none;">
<div style="padding:20px; border:1px solid #eee; border-radius:8px; background:#fafafa;">
<h3>Rare Diseases</h3>
<p style="font-size:14px; color:#666;">
Orphan markets & pricing dynamics
</p>
</div>
</a>

<a href="/supply-chain/" style="text-decoration:none;">
<div style="padding:20px; border:1px solid #eee; border-radius:8px; background:#fafafa;">
<h3>Supply Chain</h3>
<p style="font-size:14px; color:#666;">
Manufacturing, CDMO & raw materials
</p>
</div>
</a>

<a href="/regulatory/" style="text-decoration:none;">
<div style="padding:20px; border:1px solid #eee; border-radius:8px; background:#fafafa;">
<h3>Regulatory</h3>
<p style="font-size:14px; color:#666;">
Policy signals & global harmonization
</p>
</div>
</a>

</div>

</div>
