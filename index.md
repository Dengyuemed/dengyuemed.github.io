---
layout: default
title: DengYueMed
nav_exclude: true
---

<style>
/* ===== Responsive Layout ===== */
.hero-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 60px;
  align-items: start;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .notes-grid {
    grid-template-columns: 1fr;
  }

  .coverage-grid {
    grid-template-columns: 1fr;
  }

}
</style>

<div style="max-width:1200px; margin:auto; padding-top:30px; padding-left:20px; padding-right:20px;">

<h1 style="margin-bottom:8px; font-size:34px; font-weight:600;">
DengYueMed
</h1>

<p style="font-size:18px; color:#666; margin-top:0; margin-bottom:50px;">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr style="margin-bottom:60px;">

<!-- HERO SECTION -->

<div class="hero-grid">

<div>

<h2 style="margin-bottom:25px;">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div style="background:#ffffff; padding:28px; border-radius:12px; border:1px solid #e8e8e8; box-shadow:0 6px 20px rgba(0,0,0,0.04);">

<h3 style="margin-top:0; font-size:24px; line-height:1.4;">
<a href="{{ featured.url }}" style="text-decoration:none;">
{{ featured.title }}
</a>
</h3>

<p style="color:#888; font-size:14px;">
{{ featured.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:15px; line-height:1.7;">
{{ featured.excerpt }}
</p>

<p style="margin-top:20px;">
<a href="{{ featured.url }}" style="font-weight:600;">
Read Full Analysis →
</a>
</p>

</div>

</div>

<div>

<h2 style="margin-bottom:25px;">Market Watch</h2>

<div style="background:#f5f7fa; padding:28px; border-radius:12px; border:1px solid #e5e5e5;">

<ul style="margin:0; padding-left:18px; line-height:1.9;">

<li><strong>FDA Approvals</strong><br>
<span style="font-size:14px; color:#666;">
Recent oncology & rare disease approvals
</span></li>

<li style="margin-top:18px;"><strong>EMA Decisions</strong><br>
<span style="font-size:14px; color:#666;">
European regulatory milestones
</span></li>

<li style="margin-top:18px;"><strong>China NMPA Updates</strong><br>
<span style="font-size:14px; color:#666;">
Accelerated pathways & policy signals
</span></li>

<li style="margin-top:18px;"><strong>Rare Disease Policy</strong><br>
<span style="font-size:14px; color:#666;">
Global orphan drug incentives
</span></li>

</ul>

</div>

</div>

</div>

<hr style="margin:80px 0 60px 0;">

<h2 style="margin-bottom:35px;">Latest Research Notes</h2>

<div class="notes-grid">

{% for post in site.posts offset:1 limit:4 %}

<div style="padding:24px; border:1px solid #eee; border-radius:10px; background:#ffffff;">

<h3 style="margin-top:0; font-size:20px;">
<a href="{{ post.url }}" style="text-decoration:none;">
{{ post.title }}
</a>
</h3>

<p style="font-size:13px; color:#999;">
{{ post.date | date: "%B %d, %Y" }}
</p>

<p style="font-size:14px; line-height:1.6;">
{{ post.excerpt }}
</p>

</div>

{% endfor %}

</div>

<hr style="margin:80px 0 60px 0;">

<h2 style="margin-bottom:35px;">Coverage Areas</h2>

<div class="coverage-grid">

<a href="/oncology/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3>Oncology</h3>
<p style="font-size:14px; color:#666;">
Solid tumors, IO, ADCs, pipeline tracking
</p>
</div>
</a>

<a href="/rare-diseases/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3>Rare Diseases</h3>
<p style="font-size:14px; color:#666;">
Orphan markets & pricing dynamics
</p>
</div>
</a>

<a href="/supply-chain/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3>Supply Chain</h3>
<p style="font-size:14px; color:#666;">
Manufacturing, CDMO & raw materials
</p>
</div>
</a>

<a href="/regulatory/" style="text-decoration:none;">
<div style="padding:25px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
<h3>Regulatory</h3>
<p style="font-size:14px; color:#666;">
Policy signals & global harmonization
</p>
</div>
</a>

</div>

</div>
