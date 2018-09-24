<template>
  <section>
    <div class="outer-wrapper">
      <i class="fa fa-times" @click="closeModal()"></i>
      <div class="modal-header">
        <p>EMAIL:</p>
        <h2>{{modalData.name}}</h2>
      </div>
      <div class="modal-body">
        <p>Fill out the form below and Premium Pools & Spas of Charlotte will get in touch</p>
        <div class="form-wrapper">
          <form>
            <div class="input-wrapper">
              <div class="label-wrapper">
                <label for="name">First and last name</label>
                <img src="../assets/checkmark-circle.png" alt="check-box-img">
              </div>
              <input type="text" name="name" id="name" required>
            </div>
            <div class="input-wrapper number-wrapper">
              <div class="label-wrapper">
                <label for="name">Phone number</label>
                <img src="../assets/checkmark-circle.png" alt="check-box-img">
              </div>
              <input type="text" name="number" id="number" required>
            </div>
            <div class="input-wrapper">
              <div class="label-wrapper">
                <label for="name">Email</label>
                <img src="../assets/checkmark-circle.png" alt="check-box-img">
              </div>
              <input type="email" name="email" id="email" required>
            </div>
            <div class="input-wrapper">
              <div class="label-wrapper">
                <label for="name">Comments</label>
                <p>Optional</p>
              </div>
              <textarea id="comments" name="comments" rows="3" cols="33" maxlength="200"></textarea>
            </div>
            <div class="submit-btn-wrapper">
              <button>Send Email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    modalData: Object,
    closeModal: Function
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 3;
  top: 0vh;
  bottom: 0vh;
  .outer-wrapper {
    max-width: 60%;
    margin: 50px auto 100px auto;
    background: white;
    .fa {
      color: #ffffff;
      float: right;
      padding-top: 10px;
      padding-right: 10px;
      cursor: pointer;
    }
    .modal-header {
      background-color: rgb(8, 61, 140);
      padding: 25px 20px;
      color: #ffffff;
      font-weight: bold;
      p {
        padding-bottom: 5px;
      }
      h2 {
        font-size: 1.5em;
      }
    }
    .modal-body {
      p {
        padding: 25px 20px;
        font-size: 1em;
        color: rgb(97, 97, 97);
      }
      .form-wrapper {
        max-width: 100%;
        background-color: rgb(246, 246, 246);
        form {
          padding: 0px 20px;
          max-width: 100%;
          img {
            max-width: 25px;
            height: 25px;
          }
          .submit-btn-wrapper {
            text-align: center;
            width: 100%;
            padding: 20px 0px;
            button {
              background: transparent;
              border: none;
              color: #3f3f3f;
            }
          }
          .input-wrapper {
            max-width: 100%;
            padding-top: 20px;
            // &:last-of-type {
            //   padding-bottom: 20px;
            // }
            .label-wrapper {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 5px;
              label {
                font-weight: bold;
                color: #3f3f3f;
              }
              p {
                font-style: italic;
                padding: 0px;
              }
            }
            input,
            textarea {
              width: 100%;
            }
            input {
              padding: 10px 0px;
            }
          }
        }
      }
    }
  }
}
</style>


