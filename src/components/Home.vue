<template>
  <div>
    <div class="page-image">
      <img src="../assets/water-image.png" alt="">
    </div>
    <FilterForm :checkBoxValues="checkBoxValues" :updateState="updateState" :count="dealersCount"></FilterForm>
    <DealersSection :dealers="dealersData" :modalHandle="modalHandle"></DealersSection>
    <Modal v-if="showModal" :modalData="modalData" :showModal="showModal" :closeModal="modalViewHandle"></Modal>
    <appFooter></appFooter>
  </div>
</template>

<script>
import axios from "axios";
import FilterForm from "./FilterForm.vue";
import DealersSection from "./DealersSection.vue";
import AppFooter from "../shared/AppFooter";
import Modal from "./Modal";
export default {
  data() {
    return {
      apiData: [],
      dealersData: [],
      checkBoxValues: [
        "Service Pro",
        "Installation Pro",
        "Residential Pro",
        "Commercial Pro"
      ],
      dealersCount: 0,
      showModal: false,
      modalData: {}
    };
  },
  created() {
    const url = "https://api.myjson.com/bins/sgv34";
    axios
      .get(url)
      .then(res => {
        this.setAppState(res.data.dealers);
      })
      .catch(err => console.log(err));
  },
  methods: {
    setAppState(data) {
      this.apiData = data;
      this.dealersData = this.apiData;
      this.dealersCount = this.dealersData.length;
    },
    updateState(checkBoxValues) {
      this.updateResult(checkBoxValues);
      this.updateCount();
    },
    updateResult(checkBoxValues) {
      if (!checkBoxValues) {
        return;
      }
      this.dealersData = this.apiData.filter(
        dealer =>
          dealer.data.certifications.length ===
          [...new Set([...dealer.data.certifications, ...checkBoxValues])]
            .length
      );
    },
    updateCount() {
      this.dealersCount = this.dealersData.length;
    },
    modalHandle(index) {
      this.modalViewHandle();
      index ? (this.modalData = this.dealersData[index].data) : null;
      console.log('------------------------------------');
      console.log(this.modalData);
      console.log('------------------------------------');
    },
    modalViewHandle() {
      this.showModal = !this.showModal;
    }
  },
  components: {
    FilterForm,
    DealersSection,
    AppFooter,
    Modal
  }
};
</script>

<style lang="scss" scoped>
div {
  // position: relative;
  .page-image {
    max-width: 100%;
    margin-top: 70px;
    img {
      max-width: 100%;
    }
  }
}
</style>


