---
layout: default
title: DengYueMed
nav_exclude: true
---

<div style="max-width:1200px; margin:auto; padding-top:30px;">

<!-- ===== HEADER ===== -->

<h1 style="margin-bottom:8px; font-size:38px; font-weight:600; letter-spacing:0.5px;">
DengYueMed
</h1>

<p style="font-size:18px; color:#666; margin-top:0; margin-bottom:50px;">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr style="margin-bottom:60px;">

<!-- ===== HERO SECTION ===== -->

<div style="display:grid; grid-template-columns: 3fr 2fr; gap:60px; align-items:start;">

<!-- ===== LEAD ANALYSIS ===== -->

<div>

<h2 style="margin-bottom:25px; font-weight:600;">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div style="background:#ffffff; padding:32px; border-radius:12px; border:1px solid #e8e8e8; box-shadow:0 6px 20px rgba(0,0,0,0.04);">

<h3 style="margin-top:0; font-size:26px; line-height:1.3;">
<a href="{{ featured.url }}" style="text-decoration:none;">
{{ featured.title }}
</a>
</h3>

<p style="color:#888; font-size:14px; margin-top:8px;">
{{ featured.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:16px; line-height:1.7; margin-top:18px;">
{{ featured.excerpt }}
</p>

<p style="margin-top:25px;">
<a href="{{ featured.url }}" style="font-weight:600;">
Read Full Analysis →
</a>
</p>

</div>

</div>

<!-- ===== MARKET WATCH ===== -->

<div>

<h2 style="margin-bottom:25px; font-weight:600;">Market Watch</h2>

<div style="background:#f5f7fa; padding:28px; border-radius:12px; border:1px solid #e5e5e5;">

<ul style="margin:0; padding-left:18px; line-height:1.9;">

<li>
<strong>FDA Approvals</strong><br>
<span style="font-size:14px; color:#666;">
Recent oncology & rare disease approvals
</span>
</li>

<li style="margin-top:18px;">
<strong>EMA Decisions</strong><br>
<span style="font-size:14px; color:#666;">
European regulatory milestones
</span>
</li>

<li style="margin-top:18px;">
<strong>China NMPA Updates</strong><br>
<span style="font-size:14px; color:#666;">
Accelerated pathways & policy signals
</span>
</li>

<li style="margin-top:18px;">
<strong>Rare Disease Policy</strong><br>
<span style="font-size:14px; color:#666;">
Global orphan drug incentives
</span>
</li>

</ul>

</div>

</div>

</div>

<hr style="margin:80px 0 60px 0;">

<!-- ===== LATEST NOTES ===== -->

<h2 style="margin-bottom:35px; font-weight:600;">Latest Research Notes</h2>

<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:40px;">

{% for post in site.posts offset:1 limit:4 %}

<div style="padding:24px; border:1px solid #eee; border-radius:10px; background:#ffffff; transition:0.2s ease;">

<h3 style="margin-top:0; font-size:20px; line-height:1.4;">
<a href="{{ post.url }}" style="text-decoration:none;">
{{ post.title }}
</a>
</h3>

<p style="font-size:13px; color:#999; margin-top:6px;">
{{ post.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:14px; line-height:1.6; margin-top:12px;">
{{ post.excerpt }}
</p>

</div>

{% endfor %}

</div>

<hr style="margin:80px 0 60px 0;">

<!-- ===== COVERAGE AREAS ===== -->

<h2 style="margin-bottom:35px; font-weight:600;">Coverage Areas</h2>

<div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:30px;">

<a href="/oncology/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3 style="margin-top:0;">Oncology</h3>
<p style="font-size:14px; color:#666; line-height:1.6;">
Solid tumors, IO, ADCs, pipeline tracking
</p>
</div>
</a>

<a href="/rare-diseases/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3 style="margin-top:0;">Rare Diseases</h3>
<p style="font-size:14px; color:#666; line-height:1.6;">
Orphan markets, pricing & access dynamics
</p>
</div>
</a>

<a href="/supply-chain/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3 style="margin-top:0;">Supply Chain</h3>
<p style="font-size:14px; color:#666; line-height:1.6;">
Manufacturing, CDMO & raw materials
</p>
</div>
</a>

<a href="/regulatory/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3 style="margin-top:0;">Regulatory</h3>
<p style="font-size:14px; color:#666; line-height:1.6;">
Policy signals & global harmonization
</p>
</div>
</a>

</div>

</div>
