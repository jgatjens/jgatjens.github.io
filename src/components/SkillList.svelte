<script>
  import Button from "./Button.svelte";
</script>

<style>
  section {
    padding-top: 10px;
    text-align: center;
  }
</style>

<section>
  <Button
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
    target="_blank"
    >Javascript</Button
  >
  <Button href="https://nodejs.org/" target="_blank">Nodejs</Button>
  <Button href="https://facebook.github.io/react-native/" target="_blank"
    >Mobile</Button
  >
  <Button
    variant="primary"
    href="https://www.linkedin.com/in/jgatjens?trk=hp-identity-photo#background-skills-container"
    target="_blank"
    >+10</Button
  >
</section>
