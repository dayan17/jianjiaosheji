<template>
  <div>
    home
 <ul>
      <router-link to="/home/recommend" tag="li">推荐</router-link>

      <router-link to="/home/furniture" tag="li">家具</router-link>

      <router-link to="/home/family" tag="li" >家居</router-link>

      <router-link to="/home/activity" tag="li" >活动</router-link>

 </ul>

        <router-view></router-view>
    
  </div>
</template>