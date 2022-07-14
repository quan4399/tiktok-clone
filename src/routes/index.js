import Home from  "~/pages/Home"
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from  "~/pages/Live"
import config from '~/config'

import HeaderOnly from "~/layouts/HeaderOnly";


const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
  { path: config.routes.live, component: Live },
  // { path: '/@:nickname', component: Profile }
]

const privateRoutes = [

]

export  { publicRoutes, privateRoutes }