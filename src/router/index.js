import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/1Hello';
import Counter from '@/components/2Counter';
import DataFromRemote from '@/components/3DataFromRemote';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    }, {
      path: '/1',
      name: 'Counter',
      component: Counter,
    }, {
      path: '/2',
      name: 'DataFromRemote',
      component: DataFromRemote,
    },
  ],
});
