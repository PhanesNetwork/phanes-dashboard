import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Index from '@/views/Index.vue'
import LiquidityLocker from '@/views/LiquidityLocker.vue'
import TokenLocker from '@/views/TokenLocker.vue'
import TokenMinter from '@/views/TokenMinter.vue'
import Staking from '@/views/Staking.vue'
import Multisender from '@/views/Multisender.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children:[
      {
        path: '/dashboard',
        component: Index
      },
      {
        path: '/dashboard/liquidityLocker',
        name: 'LiquidityLockerView',
        component: LiquidityLocker
      },
      {
        path: '/dashboard/tokenLocker',
        name: 'TokenLockerView',
        component: TokenLocker
      },
      {
        path: '/dashboard/tokenMinter',
        name: 'TokenMinterView',
        component: TokenMinter
      },
      {
        path: '/dashboard/staking',
        name: 'StakingView',
        component: Staking
      },
      {
        path: '/dashboard/multisender',
        name: 'Multisender',
        component: Multisender
      },
    ]

  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
