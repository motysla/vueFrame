import Vue from 'vue';
import Skeleton from '../common/skeleton/skeleton-2';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});
