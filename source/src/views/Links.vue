<template>

<div class="co">

<div class="box">
  <iframe src="https://vk.com/video_ext.php?oid=-132904743&id=456239025&hash=e9c46369f26fec8a" frameborder="0"></iframe>
</div>

<div class="lin">
<a href="http://instagram.com/koalomole" target="_blank"> Instagram</a>
<a href="http://fb.com/koalomole" target="_blank"> Facebook</a> 
<a href="http://twitter.com/koalomole" target="_blank"> Twitter</a>
</div>

</div>


</template>
<style>


.co{
display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
justify-content: space-between;
    padding-top: 15px;
}

  .box{
   max-width: 100%;
margin: 0;


  }

  
  iframe{
    margin-left: 15px;
    width: 60vw;
 height: 40vw;
  }
    

.lin{
  
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
 align-content: flex-start;


   }
 .lin a {
    margin: 0;

   font-size: 6vmin;
text-decoration: none;
font-family: 'Roboto', sans-serif;
color:transparent;
          text-shadow: 0px 1px 1px rgb(126, 126, 126);

      }
    .lin a:hover{
      color: aliceblue;
      text-shadow: 0px 0px 1px rgb(255, 255, 255),1px 0px 2px rgb(15,15,15)
    }



      
</style>