<template>
  <section>
    <div class="cards-wrapper">
      <div class="card" v-for="(dealer, idx) in dealers" :key="idx">
        <div class="dealer-name-wrapper">
          <h2>{{dealer.data.name}}</h2>
        </div>
        <div class="dealer-phone">
          <img src="../assets/phone-icon-desktop.png" alt="">
          <p>{{dealer.data.phone1}}</p>
        </div>
        <p class="message-par">Can’t talk now? Click below to send an email.</p>
        <button class="email-btn" @click="modalHandle(idx)">
          <img src="../assets/email-icon.png" alt="">
          <span>Contact this Pro</span>
        </button>
        <div class="hours-section">
          <h3>Business Hours</h3>
          <p>Weekdays {{dealer.data.weekHours.mon}}</p>
          <p>Saturdays {{dealer.data.weekHours.sat ? dealer.data.weekHours.sat : 'CLOSED'}}</p>
          <p>Sundays {{dealer.data.weekHours.sun ? dealer.data.weekHours.sun : 'CLOSED'}}</p>
        </div>
        <div class="services">
          <ul>
            <li v-for="(service, idx) in dealer.data.certifications" :key="idx">
              <img src="" alt="">
              <p>{{service}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dealers: Array,
    modalHandle: Function
  }
};
</script>

<style lang="scss" scoped>
section {
  max-width: 95%;
  margin: 0 auto;
  .cards-wrapper {
    margin: 20px auto 0 auto;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .card {
      margin-bottom: 20px;
      padding: 0px 0px;
      flex: 0 0 32.7%;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      box-shadow: 0 3px 6px rgb(221, 221, 221), 0 3px 6px rgba(0, 0, 0, 0.23);
      .dealer-name-wrapper {
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid rgb(236, 236, 236);
        h2 {
          text-align: center;
          color: rgb(63, 63, 63);
          font-weight: bold;
          font-size: 1.7vw;
          padding: 25px 0px;
        }
      }
      .dealer-phone {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p {
          margin-left: 10px;
          color: rgb(63, 63, 63);
          font-weight: bold;
          font-size: 1.7vw;
          padding: 30px 0px;
        }
        img {
          max-width: 30px;
        }
      }
      .message-par {
        font-style: italic;
        font-size: 1.3vw;
        padding-bottom: 25px;
      }
      .email-btn {
        width: 48%;
        margin: 0 auto 25px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 20px 14px;
        background: transparent;
        border: 1px solid rgb(2, 199, 198);
        border-radius: 3px;
        color: rgb(8, 61, 140);
        font-weight: bold;
        img {
          max-width: 20px;
        }
      }
      .hours-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 25px;
        h3 {
          font-weight: bold;
          font-size: 1.3vw;
          color: rgb(63, 63, 63);
          padding-bottom: 10px;
        }
        p {
          color: #3f3f3f;
          padding-bottom: 5px;
        }
      }
      .services {
        background-color: rgb(246, 246, 246);
        width: 100%;
        height: 75px;
        margin: 0 auto;
        // padding: 25px 0px;
        ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 8px;
          li {
            flex: 0 0 50%;
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            p {
              color: #3f3f3f;
            }
          }
        }
      }
    }
  }
}
</style>


