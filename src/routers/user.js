
import UserInfo from '@/views/userinfo/index'
import BaseInfo from '@/views/userinfo/baseInfo'
import InfoList from '@/views/userinfo/infoList'

export default {
  redirect: '/userinfo/info',
  path: '/userinfo',
  name: 'UserInfo',
  component: UserInfo,
  children: [
    {
      path: 'info',
      name: 'BaseInfo',
      component: BaseInfo
    },
    {
      path: 'infolist/:id',
      name: 'InfoList',
      component: InfoList
    }
  ]
}
