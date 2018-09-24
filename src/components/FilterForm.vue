<template>
  <section class="filter-form-section">
    <ul class="first">
      <li>{{count}} dealers in 28226</li>
      <li>Filter Results</li>
    </ul>
    <ul class="second">
      <li v-for="(value, idx) in checkBoxValues" :key="idx">
        <label class="container">
          <input type="checkbox" :value="value" v-model="queryValues" @change="updateState(queryValues)" />
          <span class="checkmark"></span>
          <p>{{value}}</p>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    checkBoxValues: Array,
    updateState: Function,
    count: Number
  },
  data() {
    return {
      queryValues: []
    };
  }
};
</script>

<style lang="scss" scoped>
.filter-form-section {
  max-width: 95%;
  margin: -30px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  ul {
    font-size: 1em;
    background-color: rgb(241, 241, 241);
    padding: 50px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .first {
    flex: 1 1 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10%;
    li {
      &:first-of-type {
        color: rgb(33, 109, 223);
        font-weight: bold;
        font-size: 1.2em;
      }
    }
  }
  .second {
    flex: 1 1 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

// check box styles
/* The container */
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* Hide the browser's default checkbox */
  input {
    opacity: 0;
    cursor: pointer;
    margin: 0px;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 3px;
    background-color: rgb(207, 207, 207);
  }
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  background: white;
}
</style>