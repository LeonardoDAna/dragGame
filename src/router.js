
// 导入 路由模块
import VueRouter from 'vue-router'

import testOne from '../components/testOne.vue'
import login from '../components/login/login.vue'
import testTwo from '../components/testTwo.vue'
import otherPack from '../components/otherPack.vue'
import chooseCapteur from '../components/chooseCapteur.vue'
import verifyResult from '../components/verifyResult.vue'
import chooseResult from '../components/chooseResult.vue'
import comparison from '../components/comparison.vue'


const router = new VueRouter({
    routes: [
        { name: 'login', path: '/', component: login, },
        { name: 'testOne', path: '/home', component: testOne, },
        { name: 'testTwo', path: '/testTwo', component: testTwo, },
        { name: 'otherPack', path: '/otherPack', component: otherPack, },
        { name: 'chooseCapteur', path: '/chooseCapteur', component: chooseCapteur, },
        { name: 'verifyResult', path: '/verifyResult', component: verifyResult, },
        { name: 'chooseResult', path: '/chooseResult', component: chooseResult, },
        { name: 'comparison', path: '/comparison', component: comparison, },
    ]
})
// 导出
export default router


