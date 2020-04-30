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

const routes = [
  {
        name:'home',
        path: '/',
        component: Home

  },
  {
      name: 'regions',
      path: '/regions',
      component: Regions
  },
  { 
      name: 'editRegion',
      path: '/region/edit/:id',
      component: EditRegion
  },
  { 
    name: 'editSchool',
    path: '/school/edit/:id',
    component: EditSchool
  },
  { 
    name: 'editDonator',
    path: '/donator/edit/:id',
    component: EditDonator
  },
  { 
    name: 'editDonation',
    path: '/donation/edit/:id',
    component: EditDonation
  },
  { 
    name: 'editCountry',
    path: '/country/edit/:id',
    component: EditCountry
  },
  { 
    name: 'addSchool',
    path: '/school/add',
    component: AddSchool
  },
  { 
    name: 'addRegion',
    path: '/region/add',
    component: AddRegion
  },
  { 
    name: 'addDonator',
    path: '/donator/add',
    component: AddDonator
  },
  { 
    name: 'addDonation',
    path: '/donation/add',
    component: AddDonation
  },
  { 
    name: 'addCountry',
    path: '/country/add',
    component: AddCountry
  },
  {
      name: 'schools',
      path: '/schools',
      component: Schools
  },
  {
    name: 'donators',
    path: '/donators',
    component: Donators
  },
  {
    name: 'donations',
    path: '/donations',
    component: Donations
  },
  {
    name: 'countries',
    path: '/countries',
    component: Countries
  },
    /*  {
        name:'login',
        path:'/login',
        component: LoginPage
    },
    {
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