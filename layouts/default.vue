<template>
  		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
  <a class="navbar-brand" href="index.html">Furni<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <NuxtLink to="/siswa/" class="nav-link">
        Siswa
      </NuxtLink>
      <li><a class="nav-link" href="contact.html">Contact us</a></li>
    </ul>

    <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a class="nav-link" href="#"><img src="public/furni/images/user.svg"></a></li>
      <li><a class="nav-link" href="cart.html"><img src="public/furni/images/cart.svg"></a></li>
    </ul>
  </div>
</div>
  
</nav>
    <div class="container">
      <slot/>
    </div>
  </template>