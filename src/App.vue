<script>
import liff from '@line/liff';

export default {
  name: 'App',
  data: () => ({
    profile: {},
    userId: '',
    isAuth: false,
  }),
  watch: {
    profile: function (val, oldVal) {
      if (val && val.userId) {
        this.userId = val.userId;
      }
    },
    isAuth: function (val, oldVal) {
      if (val) {
        this.isAuth = val;
      }
    },
    isLoading: function (val, oldVal) {
      this.isLoading = val;
    },
  },
  methods: {
    getLineProfile: () => {},
    isAuthentication: function (lineId) {
      this.isAuth = true;
      this.$router.push('/search_policy');
    },
  },
  computed: {},
  mounted: function mounted() {
    localStorage.token = 'test'; // must remove this line
    console.log(process.env);
    liff.init({ liffId: 'process.env.VUE_APP_LIFF_ID' }).then(() => {
      liff.ready.then(async () => {
        if (liff.isInClient()) {
          this.profile = await liff.getProfile();
          if (this.profile) {
            this.isAuthentication(this.userId);
          }
        } else {
          liff.closeWindow();
        }
      });
    });
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style></style>
