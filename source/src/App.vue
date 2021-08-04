<template>
  <div class="content">
    <div class="wrap">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/gallery">Gallery</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/events">Events</router-link> |
        <router-link to="/links">Links</router-link>
      </div>
          <router-view />
      <ol class="langa">
        <li type="button" id="#ukr">UKR</li>
        <li type="button" id="#en" >EN </li>
        <li type="button" id="#ru">RU</li>
        </ol>

    </div>
      <footer class="footer">KOALOMOLE © 2021</footer>
  </div>

</template>
<script>


// import Style from '../assets/sass/style.scss'
</script>
<style>
html,
body {
  background-image: url("./assets/ptrn/bloom.png");
  width: 100%;
height: 100%;

}
  .langa {
    display: none;
    position:absolute;
    right:  1%;
    top: 1.5%;
   
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  background: none;
  }
    
.langa > li{
  border: 0.5px solid rgb(190, 190, 190);
  display: none;
  margin: 0%;
  padding: 0%;
  list-style: none;
  font-size: 1vmax;
  font-weight: 200;
  color: rgb(170, 170, 170);
  text-shadow: 0px 0px 1px rgb(15, 15, 15);
  margin: 1px;}

  .langa > li:hover{
    
font-size: 2.2vmin;
box-shadow: 0px 1px 2px rgb(148, 148, 148) ;
padding: 2.8px;
border-radius: 5px ;
border: 0.1px thin rgb(166,166,150);
background-color: rgba(245, 245, 245, 0.877);
color: rgb(51, 51, 51);
text-shadow: 0px 1px 2px rgb(255, 255, 255);

  }




.content {
width: 100%;
}

.wrap {
  font-size: 2.4vmax;
  color: rgb(148, 148, 148);
  text-shadow: 0px 0px 1px gray;
min-height: 100%;
}
.footer {
  position:absolute;
right:0;
bottom: 0;

  font-size: 1.2vmax;
    font-family: 'Roboto', sans-serif;

}


#nav 
{

  margin-top: 1%; 
  text-decoration-line: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: static;
  padding-top: 2%;
  padding-bottom: 2%;
}



  a {
    font-weight: 900;
    color: transparent;
    background-clip: text;
 text-shadow: 0px 0px 4px rgb(216, 216, 216),0px 1px 1px rgb(126, 126, 126);

    text-decoration-line: none;
    font-size: 2.5vmax;}
  
    a.router-link-exact-active {
      color: transparent;
      text-shadow: 0px 0px 1px rgb(255, 255, 255),1px 0px 2px rgb(15,15,15);
      background-clip: text;
      font-size: 2.5vmax;

        text-decoration-line: none;

    }
      a:hover {
        font-size: 2.5vmax;
        text-decoration-line: none;
  color: aliceblue;
      text-shadow: 0px 0px 1px rgb(255, 255, 255),1px 0px 2px rgb(15,15,15)
      }
  

      
</style>



