<template>
<div class="wrap">
  <div class="logo">
    <h1>404</h1>
      <p>The Page not Found-找不到你要访问的页面</p>
    <div class="sub">
      <p>
        <router-link to="/">goBack</router-link>
      </p>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrap{
margin:0 auto;
width:100%;
height: 100%;
background:#f3f3e1;
}
.logo{
transform: translateY(30%);
}
.logo h1{
font-size:200px;
color:#8F8E8C;
text-align:center;
margin-bottom:1px;
text-shadow:1px 1px 6px #fff;
}
.logo p{
color:rgb(228, 146, 162);
font-size:20px;
margin-top:1px;
text-align:center;
}
.logo p span{
color:lightgreen;
}
.sub a{
color:white;
background:#8F8E8C;
text-decoration:none;
padding:7px 120px;
font-size:13px;
font-family: arial, serif;
font-weight:bold;
-webkit-border-radius:3em;
-moz-border-radius:.1em;
-border-radius:.1em;
}
</style>
