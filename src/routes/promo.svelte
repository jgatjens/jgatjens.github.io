<script>
  import PromoHeader from "../components/PromoHeader.svelte";
  import Schedule from "../components/Schedule.svelte";
  import ShareLinks from "../components/ShareLinks.svelte";
</script>

<style>

  section {
    display: block;
    height: 100%;
  }
  
  .container {
    max-width: 440px;
    margin: 0 auto;
    padding-top: 35px;
    padding-left: 20px;
    padding-right: 20px;
    color: #3B3E48;
  }
  
  h2 {
    font-size: 20px;
    font-weight: normal;
  }
  
  ul {
    font-size: 14px;
    line-height: 22px;
    list-style: disc;
    padding-left: 18px;
  }
  
  ShareLinks {
    margin-top: 30px;
    margin-bottom: 40px;
    text-align: left;
  }

  p {
    color: #3B3E48;
    font-size: 16px;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 25px;
  }
</style>

<svelte:head>
  <title>Ganador - jgatjens</title>
  <meta name="description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
  <meta name="keywords" content="Promo, twitch, jgatjens, Lol, League of Legends, Games" />
  <meta name="author" content="Ganador " />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Ganador -" />
  <meta property="og:description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
  <meta property="og:image" content="/share-promo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@jgatjens" />
  <meta name="twitter:creator" content="@jgatjens" />
  <meta name="twitter:title" content="Ganador -" />
  <meta name="twitter:description" content="Estaremos sorteando un skin de League of legends cada semana en el stream de los viernes a las 9:00 pm (-06  CST)" />
  <meta name="twitter:image" content="share-promo.png" />
  <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAACGNwgAxloDAHcTAAAVFRoAWrzFAGkrAABGproAUXaOAClxkgAPO14ADgAAAMVkDwAfWXgAkD4CAB9aewA7a4kAmDsCANqHHQDhiA4AJBogADmUuwA2lsEAiR8AAH4sDAA8dZUAhygAAA9OfAAtX4EAOFxvAJEoAABkhpoAsTsCADFoigBnip0ANQAAAEIgFwCUNAAAy2AEADVmjQA/zP8AQqjTACJYdgAdXn8AzGYNAECv3wCTPRIAOBADAEet2QC1HAAAeSsTADQTFQBXJBoAL2B8AIwkBwCFLgoAMWCFAL0oAACGLxYAxF8CABwQFgAYFBkACF2YALw0AAAiDxMAQKbOAAc/bADcdR8APqnXANJcAgAwcZQABkdyABp+sgAfXX0AUYCcACpVdwAtl88AyDoAADdzkQBBbZEAMxsTACdqiQBqIQAAMmV6ADFjhgBEGxMAx2QAAMpfAwAolMcAdCcAADVrjAA6TU4AskwBADRyhgDDbgwAOWmPAD+r3gDHYRsAJ3qeAJw0AgAkGB0AaSwqAC4VFADLZxsANneVACtZewCLHgAAMBkXAIYmBgA2FRQAhSESACVmhwAHNF8AK2OHAKJJAgBqRS0AKQUAAJAqAABEFg4AjjMAAEEZFwCONgAARxUUABtXdgBEGRcAWXd6AJonAABDHBcALW+QADhKTwDYgxUAMnKHADdojQCbNgAAIxobAHokCgCYPwAAIV98AEWu1gC9SQIAPgsAAC9bcAAjZYUASG6EAKc5AAACNGAAsy0AADl9nwAba6AAzXMlAIcwCgAgi8kATrXiAAEiNAC9LQAAizUHAMchAABZBgMAQ8f0AEYYFQAvcpEANa3vAA9imAA5cpEAUbDCAOqFCgC5VQMAz20dACVmiQBSJycAMGCAAAk1WwA3HBkALmKGANxsEQA7GxYAP6HDADyAoAAgL0AAJA0RAB9YcgCDDwMAgRAGADNvkgA9bn0AfCMAADFzlQBRGhMAhCAAAAArWQA5dZIAL57WACFpigAnHywAKWV+AB5MagAAAAcAohoAAK9FAgDTdicAK6v0AEmkuwAqcZAAMWqNACVWbQCIPBUATKi+AHMmEwAHQ30Akj0PACwUFQB1KxAAOW2WAEBsigDUaAcA0G4HAKQ1AAB8JhMAQXWBACRDUACiOwAANhcVACodJwA1GxgA2HEHAAoyXQAkbY4AVAQAAHYRAgCtPwMAMSItAFu9xwAeERYAxmEFAC5tjgAwq+wADzpjAEOtxQAkERYAJxATAEgdFQBuLggAbygRAEyqvAAudpcAwUQAABpfkgBCLiQAMxMTAAQtWACkMRAAtloMADx+iwAjaIkAhisIAFeKpQAzYncAgv4eIUkYvaJZIMq2RemwXMmo2G21nLTjNWuaAJX5ZAhQsiKYerOMy/+32ftaTM6/4XuZI6FLV76g6scn7Ls5Z/zc9Bm8FRTPQUY9lp1yLU2N7j6R+EDmwwpzLsBHfBduKvebxJCJBIsfrUQdddozSIhsMGlvL6MxQqQSXXbw9gzBVDi465fI8ZTfgRHVik8OUq59JAksBtJmVlXWJddlKRw8UYeqQ/LMxis66AHbasKOAwUN4CjN0KYLpVvFhN6pB4WP/Rpfr4Zg+nEQYnSr1A/R4oBh9ZOxNuR4WBYCP1OD3TITO+ftY3e6736eeeUmStNeTjdoG6xwp3+585+SNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" rel="icon" type="image/x-icon" />
</svelte:head>

<section>
  <PromoHeader />

  <div class="container">
    <p>
      Estaremos sorteando un skin de <a href="https://lan.leagueoflegends.com/es/" rel="noopener noreferrer" target="_blank">
        League of Legends
      </a> cada semana.
    </p>
    <Schedule />
    <h2>Reglas del concurso</h2>
    <ul>
      <li>Ser follower del stream
        <a href="https://www.twitch.tv/jgatjens" rel="noopener noreferrer" target="_blank">https://www.twitch.tv/jgatjens</a>.
      </li>
      <li>Se hara una rifa entre los followers.</li>
      <li>Estar presente el dia del sorteo.</li>
      <li>Dudas por discord o bien los días del stream.</li>
      <li>Al final del stream se dara a conocer el ganador.</li>
      <li>El ganador debera tener cuenta de League of Legends en LAN para resivir el skin.</li>
    </ul>
    <ShareLinks class="share-links" />
  </div>
</section>
