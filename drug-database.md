---
layout: default
title: Drug Database | DengYueMed
description: Global database of innovative drugs in oncology, rare diseases, and targeted therapy.
nav_order: 1
---

<style>

/* ===== Layout ===== */

.db-container{
max-width:1100px;
margin:0 auto;
padding:40px 20px;
}

/* ===== Header ===== */

.db-title{
font-size:32px;
font-weight:700;
margin-bottom:10px;
}

.db-subtitle{
color:#666;
font-size:15px;
margin-bottom:30px;
}

/* ===== Search ===== */

.search-box{
margin-bottom:25px;
}

.search-box input{
width:100%;
padding:12px;
border-radius:10px;
border:1px solid #ddd;
font-size:14px;
}

/* ===== Filters ===== */

.filter-bar{
margin-bottom:30px;
}

.filter-btn{
display:inline-block;
padding:6px 12px;
border:1px solid #ddd;
border-radius:20px;
font-size:13px;
margin-right:8px;
cursor:pointer;
}

.filter-btn:hover{
background:#f5f5f5;
}

/* ===== Grid ===== */

.db-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
}

@media(max-width:900px){
.db-grid{
grid-template-columns:1fr;
}
}

/* ===== Card ===== */

.drug-card{
border:1px solid #eaeaea;
border-radius:16px;
padding:18px;
background:#fff;
transition:0.2s;
}

.drug-card:hover{
box-shadow:0 8px 20px rgba(0,0,0,0.05);
}

.drug-name{
font-size:18px;
font-weight:600;
margin-bottom:6px;
}

.drug-meta{
font-size:13px;
color:#666;
margin-bottom:10px;
}

/* ===== Tags ===== */

.tag{
display:inline-block;
font-size:11px;
padding:3px 8px;
border-radius:10px;
margin-right:5px;
margin-bottom:5px;
}

.tag-mech{
background:#eef4ff;
color:#3a6fd8;
}

.tag-status{
background:#f0fff5;
color:#1a8f5c;
}

.tag-area{
background:#fff6ea;
color:#d67a00;
}

/* ===== Link ===== */

.read-link{
font-size:13px;
font-weight:600;
display:inline-block;
margin-top:8px;
}

</style>

<div class="db-container">

<h1 class="db-title">Drug Intelligence Database</h1>

<p class="db-subtitle">
Structured insights into global innovative drugs across oncology, rare diseases, and targeted therapy.
</p>

<!-- ===== Search ===== -->

<div class="search-box">
<input type="text" id="searchInput" placeholder="Search drug name, target, or company...">
</div>

<!-- ===== Filters ===== -->

<div class="filter-bar">
<span class="filter-btn" onclick="filterCategory('all')">All</span>
<span class="filter-btn" onclick="filterCategory('oncology')">Oncology</span>
<span class="filter-btn" onclick="filterCategory('rare')">Rare Disease</span>
<span class="filter-btn" onclick="filterCategory('gene')">Gene Therapy</span>
</div>

<!-- ===== Grid ===== -->

<div class="db-grid" id="drugGrid">

<!-- ENHERTU -->
<div class="drug-card" data-category="oncology">
<div class="drug-name">Enhertu</div>
<div class="drug-meta">Daiichi Sankyo / AstraZeneca</div>

<span class="tag tag-mech">ADC</span>
<span class="tag tag-area">HER2</span>
<span class="tag tag-status">FDA / China</span>

<p class="drug-meta">
HER2-targeted antibody-drug conjugate with strong efficacy in HER2-mutant NSCLC.
</p>

<a href="/oncology/" class="read-link">View Analysis →</a>
</div>

<!-- ZONGERTINIB -->
<div class="drug-card" data-category="oncology">
<div class="drug-name">Zongertinib</div>
<div class="drug-meta">Boehringer Ingelheim</div>

<span class="tag tag-mech">TKI</span>
<span class="tag tag-area">HER2 TKD</span>
<span class="tag tag-status">FDA</span>

<p class="drug-meta">
Selective HER2 TKI showing high ORR in NSCLC.
</p>

<a href="/oncology/" class="read-link">View Analysis →</a>
</div>

<!-- SEVABERTINIB -->
<div class="drug-card" data-category="oncology">
<div class="drug-name">Sevabertinib</div>
<div class="drug-meta">Bayer</div>

<span class="tag tag-mech">TKI</span>
<span class="tag tag-area">HER2/EGFR</span>
<span class="tag tag-status">China</span>

<p class="drug-meta">
Dual HER2/EGFR inhibitor for previously treated NSCLC.
</p>

<a href="/oncology/" class="read-link">View Analysis →</a>
</div>

<!-- GENE THERAPY -->
<div class="drug-card" data-category="gene">
<div class="drug-name">Zynteglo</div>
<div class="drug-meta">Bluebird Bio</div>

<span class="tag tag-mech">Gene Therapy</span>
<span class="tag tag-area">β-thalassemia</span>
<span class="tag tag-status">FDA / EMA</span>

<p class="drug-meta">
Lentiviral gene therapy correcting β-globin deficiency.
</p>

<a href="/rare-diseases/" class="read-link">View Analysis →</a>
</div>

<!-- LENIOLISIB -->
<div class="drug-card" data-category="rare">
<div class="drug-name">Leniolisib</div>
<div class="drug-meta">Pharming Group</div>

<span class="tag tag-mech">PI3Kδ inhibitor</span>
<span class="tag tag-area">APDS</span>
<span class="tag tag-status">Japan</span>

<p class="drug-meta">
Precision immune pathway modulation therapy.
</p>

<a href="/rare-diseases/" class="read-link">View Analysis →</a>
</div>

</div>

</div>

<!-- ===== Script ===== -->

<script>

function filterCategory(category){
let cards=document.querySelectorAll('.drug-card');
cards.forEach(card=>{
if(category==='all'||card.dataset.category===category){
card.style.display='block';
}else{
card.style.display='none';
}
});
}

document.getElementById('searchInput').addEventListener('keyup', function(){
let value=this.value.toLowerCase();
let cards=document.querySelectorAll('.drug-card');

cards.forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(value)?'block':'none';
});
});

</script>
