<template>
  <header>
    <h1><img src="../assets/pool-pros-logo.png" alt="logo"></h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/pools">Pools & Spa</router-link>
      </li>
      <li>
        <router-link to="/supplies">Supplies</router-link>
      </li>
      <li>
        <router-link to="/resources">Resources</router-link>
      </li>
      <li>
        <router-link to="/services">Services</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  width: 95%;
  margin: 0 auto;
  // position: fixed;
  z-index: 1;
  top: 0;
  background-color: rgb(234, 235, 236);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2.5%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  h1 {
    flex: 1 1 40%;
    img {
      width: 50%;
      height: auto;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 60%;
    li {
      a {
        color: #083d8c;
        &:hover {
        }
      }
    }
  }
}
</style>


