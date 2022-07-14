import Home from  "~/pages/Home"
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import routesConfig from '~/config/routes'

import HeaderOnly from "~/components/Layout/HeaderOnly";


const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
  // { path: '/@:nickname', component: Profile }
]

const privateRoutes = [

]

export  { publicRoutes, privateRoutes }