<script>
  export let variant;
</script>

<style>
  .button {
    display: inline-block;
    font-size: 15px;
    border-radius: 20px;
    padding: 7px 18px;
    border: 1px solid #cdcfd4;
    margin: 0 2px 10px;
    font-weight: 200;
    color: #777777;
    text-decoration: none;
    text-transform: uppercase;
  }

  .primary {
    background-color: #3B3E49;
    border-color: #3B3E49;
    color: white;
  }
</style>

<button class="button" class:primary={variant==='primary'}>
  <slot></slot>
</button>