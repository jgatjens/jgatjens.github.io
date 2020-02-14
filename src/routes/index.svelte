<script>
  import Button from "../components/Button.svelte";
  import Footer from "../components/Footer.svelte";
  import ForkMe from "../components/ForkMe.svelte";
  import PingHeader from "../components/PingHeader.svelte";
  import PromoHeader from "../components/PromoHeader.svelte";
  import Profile from "../components/Profile.svelte";
  import Schedule from "../components/Schedule.svelte";
  import ShareLinks from "../components/ShareLinks.svelte";
  import SkillList from "../components/SkillList.svelte";
</script>


<style>

  :global(body), :global(html) {
    font-family: 'Roboto';
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  :global(#sapper) {
    height: 100%;
  }

  p {
    margin: 0;
    padding: 15px 0 25px 0;
    line-height: 22px;
    font-weight: 200;
    color: #777777;
    font-size: 13px;
    text-align: center;
  }

  section {
    display: flex;
    align-items: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

</style>

<svelte:head>
  <title>Jairo Gätjens - Website</title>
  <meta name="description" content="I'm an experienced Full-Stack Developer based in Costa Rica." />
  <meta name="keywords" content="Website, Resume, Profile, Github, HTML, CSS, JavaScript, Nodejs, React, Angular" />
  <meta name="author" content="Jairo Gätjens" />
  <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAACGNwgAxloDAHcTAAAVFRoAWrzFAGkrAABGproAUXaOAClxkgAPO14ADgAAAMVkDwAfWXgAkD4CAB9aewA7a4kAmDsCANqHHQDhiA4AJBogADmUuwA2lsEAiR8AAH4sDAA8dZUAhygAAA9OfAAtX4EAOFxvAJEoAABkhpoAsTsCADFoigBnip0ANQAAAEIgFwCUNAAAy2AEADVmjQA/zP8AQqjTACJYdgAdXn8AzGYNAECv3wCTPRIAOBADAEet2QC1HAAAeSsTADQTFQBXJBoAL2B8AIwkBwCFLgoAMWCFAL0oAACGLxYAxF8CABwQFgAYFBkACF2YALw0AAAiDxMAQKbOAAc/bADcdR8APqnXANJcAgAwcZQABkdyABp+sgAfXX0AUYCcACpVdwAtl88AyDoAADdzkQBBbZEAMxsTACdqiQBqIQAAMmV6ADFjhgBEGxMAx2QAAMpfAwAolMcAdCcAADVrjAA6TU4AskwBADRyhgDDbgwAOWmPAD+r3gDHYRsAJ3qeAJw0AgAkGB0AaSwqAC4VFADLZxsANneVACtZewCLHgAAMBkXAIYmBgA2FRQAhSESACVmhwAHNF8AK2OHAKJJAgBqRS0AKQUAAJAqAABEFg4AjjMAAEEZFwCONgAARxUUABtXdgBEGRcAWXd6AJonAABDHBcALW+QADhKTwDYgxUAMnKHADdojQCbNgAAIxobAHokCgCYPwAAIV98AEWu1gC9SQIAPgsAAC9bcAAjZYUASG6EAKc5AAACNGAAsy0AADl9nwAba6AAzXMlAIcwCgAgi8kATrXiAAEiNAC9LQAAizUHAMchAABZBgMAQ8f0AEYYFQAvcpEANa3vAA9imAA5cpEAUbDCAOqFCgC5VQMAz20dACVmiQBSJycAMGCAAAk1WwA3HBkALmKGANxsEQA7GxYAP6HDADyAoAAgL0AAJA0RAB9YcgCDDwMAgRAGADNvkgA9bn0AfCMAADFzlQBRGhMAhCAAAAArWQA5dZIAL57WACFpigAnHywAKWV+AB5MagAAAAcAohoAAK9FAgDTdicAK6v0AEmkuwAqcZAAMWqNACVWbQCIPBUATKi+AHMmEwAHQ30Akj0PACwUFQB1KxAAOW2WAEBsigDUaAcA0G4HAKQ1AAB8JhMAQXWBACRDUACiOwAANhcVACodJwA1GxgA2HEHAAoyXQAkbY4AVAQAAHYRAgCtPwMAMSItAFu9xwAeERYAxmEFAC5tjgAwq+wADzpjAEOtxQAkERYAJxATAEgdFQBuLggAbygRAEyqvAAudpcAwUQAABpfkgBCLiQAMxMTAAQtWACkMRAAtloMADx+iwAjaIkAhisIAFeKpQAzYncAgv4eIUkYvaJZIMq2RemwXMmo2G21nLTjNWuaAJX5ZAhQsiKYerOMy/+32ftaTM6/4XuZI6FLV76g6scn7Ls5Z/zc9Bm8FRTPQUY9lp1yLU2N7j6R+EDmwwpzLsBHfBduKvebxJCJBIsfrUQdddozSIhsMGlvL6MxQqQSXXbw9gzBVDi465fI8ZTfgRHVik8OUq59JAksBtJmVlXWJddlKRw8UYeqQ/LMxis66AHbasKOAwUN4CjN0KYLpVvFhN6pB4WP/Rpfr4Zg+nEQYnSr1A/R4oBh9ZOxNuR4WBYCP1OD3TITO+ftY3e6736eeeUmStNeTjdoG6xwp3+585+SNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" rel="icon" type="image/x-icon" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://jgatjens.com/" />
  <meta property="og:title" content="Jairo Gätjens" />
  <meta property="og:description" content="I'm an experienced Full-Stack Developer based in Costa Rica." />
  <meta property="og:image" content="/jgatjens.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@jgatjens" />
  <meta name="twitter:creator" content="@jgatjens" />
  <meta name="twitter:title" content="Website Jairo Gatjens" />
  <meta name="twitter:description" content="Jairo Gatjens has been web developer for 10 years, and is currently a Front End Lead in Costa Rica. He received his degree in Computer Science in 2009. Some of his current responsibilities are: developing quality software, participating in the architecture phase and serving as the platform lead on projects, advising and mentoring fellow developers, assisting in the definition of technology standards and best practices." />
  <meta name="twitter:image" content="/jgatjens.png" />
</svelte:head>

<section>

  <ForkMe />  
  <Profile />
  <SkillList />
  <p>
    Experienced Full-Stack  <br />
    Developer based in Costa Rica..
  </p>
  <ShareLinks />
  <Footer />
</section>
