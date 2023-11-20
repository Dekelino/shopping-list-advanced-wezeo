<template>
  <div class="popup">
    <div class="popup-inner">
      <slot /> 
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-inner {
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 26vw;
  height: 20vh;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

}

</style>
