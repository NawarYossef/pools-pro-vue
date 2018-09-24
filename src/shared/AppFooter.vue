<template>
  <div class="footer-wrapper">
    <footer>
      <img src="../assets/pool-pros-logo-footer.png" alt="footer-logo">
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
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
.footer-wrapper {
  max-width: 100%;
  margin: 0 auto;
  background-color: rgb(8, 61, 140);
  footer {
    // position: a;
    // bottom: 0;
    // right: 0;
    // left: 0;
    max-width: 60%;
    margin: 0 auto;
    img {
      max-width: 40%;
      display: block;
      margin: 0 auto;
      padding-top: 30px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex: 1 1 60%;
      li {
        padding: 30px 0px;
        a {
          color: #ffffff;
          &:hover {
          }
        }
      }
    }
  }
}
</style>
