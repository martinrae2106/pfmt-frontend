/*import AllSchools from './components/AllSchools.vue';
import AddSchool from './components/AddSchool.vue';
import EditSchool from './components/EditSchool.vue';
import AddDonator from './components/AddDonator.vue';
import AllDonators from './components/AllDonators.vue';
import EditDonator from './components/EditDonator.vue';
import AddDonation from './components/AddDonation.vue';
import AllDonations from './components/AllDonations.vue';
import EditDonation from './components/EditDonation.vue';
import AddRegion from './components/AddRegion.vue';
import AllRegions from './components/AllRegions.vue';
import EditRegion from './components/EditRegion.vue';
import AddCountry from './components/AddCountry.vue';
import AllCountrys from './components/AllCountrys.vue';
import EditCountry from './components/EditCountry.vue';
import LoginPage from './components/LoginPage.vue';*/
import Home from './components/Home.vue';
import SelectRegion from './components/SelectRegion.vue';
import SelectSchool from './components/SelectSchool.vue';
import SelectDonation from './components/SelectDonation.vue';
import Regions from './components/Regions.vue';
import Schools from './components/Schools.vue';
import Donators from './components/Donators.vue';
import Donations from './components/Donations.vue';
import Countries from './components/Countries.vue';
import EditRegion from './components/EditRegion.vue';
import EditSchool from './components/EditSchool.vue';
import EditDonator from './components/EditDonator.vue';
import EditDonation from './components/EditDonation.vue';
import EditCountry from './components/EditCountry.vue';
import AddSchool from './components/AddSchool.vue';
import AddRegion from './components/AddRegion.vue';
import AddDonator from './components/AddDonator.vue';
import AddDonation from './components/AddDonation.vue';
import AddCountry from './components/AddCountry.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Register from './components/auth/Register.vue';


const routes = [
  {
        name:'home',
        path: '/',
        component: Home
  },
  {
    name:'selectregion',
    path: '/selectregion',
    component: SelectRegion
  },
  {
    name:'selectschool',
    path: '/selectschool',
    component: SelectSchool
  },
  {
    name:'selectdonation',
    path: '/selectdonation',
    component: SelectDonation
  },
  {
      name: 'regions',
      path: '/admin/regions',
      component: Regions,
      meta: {
        requiresAuth: true,
      }
  },
  { 
      name: 'editRegion',
      path: '/admin/region/edit/:id',
      component: EditRegion,
      meta: {
        requiresAuth: true,
      }
  },
  { 
    name: 'editSchool',
    path: '/admin/school/edit/:id',
    component: EditSchool,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'editDonator',
    path: '/admin/donator/edit/:id',
    component: EditDonator,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'editDonation',
    path: '/admin/donation/edit/:id',
    component: EditDonation,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'editCountry',
    path: '/admin/country/edit/:id',
    component: EditCountry,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'addSchool',
    path: '/admin/school/add',
    component: AddSchool,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'addRegion',
    path: '/admin/region/add',
    component: AddRegion,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'addDonator',
    path: '/admin/donator/add',
    component: AddDonator,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'addDonation',
    path: '/admin/donation/add',
    component: AddDonation,
    meta: {
      requiresAuth: true,
    }
  },
  { 
    name: 'addCountry',
    path: '/admin/country/add',
    component: AddCountry,
    meta: {
      requiresAuth: true,
    }
  },
  {
      name: 'schools',
      path: '/admin/schools',
      component: Schools,
      meta: {
        requiresAuth: true,
      }
  },
  {
    name: 'donators',
    path: '/admin/donators',
    component: Donators,
    meta: {
      requiresAuth: true,
    }
  },
  {
    name: 'donations',
    path: '/admin/donations',
    component: Donations,
    meta: {
      requiresAuth: true,
    }
  },
  {
    name: 'countries',
    path: '/admin/countries',
    component: Countries,
    meta: {
      requiresAuth: true,
    }
  },
  {
    name:'login',
    path:'/admin/login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    name:'register',
    path:'/admin/register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
},
  {
    name:'logout',
    path:'/admin/logout',
    component: Logout,
    meta: {
      requiresAuth: true,
    }
},
  /*  {
        name: 'home',
        path: '/',
        component: AllSchools
    },
    {
        name: 'addSchool',
        path: '/school/add',
        component: AddSchool
    },
    {
        name: 'editSchool',
        path: '/school/edit/:id',
        component: EditSchool
    }, 
    {
        name: 'addDonator',
        path: '/donator/add',
        component: AddDonator
    },
    {
        name: 'donators',
        path: '/donators/',
        component: AllDonators
    },
    {
        name: 'editDonator',
        path: '/donator/edit/:id',
        component: EditDonator
    },
    {
        name: 'addDonation',
        path: '/donation/add',
        component: AddDonation
    },
    {
        name: 'donations',
        path: '/donations/',
        component: AllDonations
    },
    {
        name: 'editDonation',
        path: '/donation/edit/:id',
        component: EditDonation
    },
    {
        name: 'addRegion',
        path: '/region/add',
        component: AddRegion
    },
    {
        name: 'regions',
        path: '/regions/',
        component: AllRegions
    },
    {
        name: 'editRegion',
        path: '/region/edit/:id',
        component: EditRegion
    },
    {
        name: 'addCountry',
        path: '/country/add',
        component: AddCountry
    },
    {
        name: 'countrys',
        path: '/countrys/',
        component: AllCountrys
    },
    {
        name: 'editCountry',
        path: '/country/edit/:id',
        component: EditCountry
    }*/
];

export default routes;