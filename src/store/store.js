import Vue from 'vue';
import Vuex from 'vuex';
import Projects from '@/json/portfolio'
import Cats from '@/json/cats'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //projects:
    background: 'cyan-viol',
    projects: Projects,
    hamburger: false,
    activeCats: [],
    allCats: Cats,
    dropdown: false,
    alphaCats: [],
    activeProjects: [],
    currentProject: {},
    currentCat: {}
  },
  getters: {
    getCategories: state => {
      //console.log(state)
      return state.projects;
    },
    getBackground: state => {
      return state.background;
    },
    getBurger: state => {
      return state.hamburger;
    },
    getAlphaCategories: state => {
      return state.alphaCats;
    },
    getActiveProjects: state => {
      return state.activeProjects;
    }
  },
  mutations: {
    setCurrentCat: (state, payload) => {
      let cats = state.allCats;
      state.currentCat = cats[payload];
    },
    setCurrentProject: (state, payload) => {
      let projects = state.projects.projects;
      let current = {};
      projects.forEach((v,i)=>{
        //console.log(v);
        if(v.slug === payload){
          current = v;
        }
      });
      state.currentProject = current;
    },
    setActiveProjects: (state , payload) => {
      let projects = state.projects.projects;
      let active = [];
      projects.forEach((v,i)=>{
        if(v.categories.includes(payload)){
          active.push(v)
        }
      });
      //console.log(active);
      state.activeProjects = active.sort((o1,o2)=>{return o1.sort - o2.sort});
    },
    clickDropown: state => {
      state.dropdown = !state.dropdown;
    },
    clickBurger: state => {
      state.hamburger = !state.hamburger;
    },
    resetDropdown: state => {
      state.dropdown = false;
    },
    resetBurger: state => {
      state.hamburger = false;
    },
    setActiveCategories: state => {
      let cats = state.activeCats;
      let projects = state.projects.projects;
      projects.forEach((v,i)=>{
        v.categories.forEach((v)=>{
          cats.push(v);
        });
      })
    },
    setAlphaCategories: state => {
      let uniqEs6 = (arrArg) => {
        return arrArg.filter((elem, pos, arr) => {
          return arr.indexOf(elem) == pos;
        });
      }
      let all = state.allCats;
      let alphaArr = uniqEs6(state.activeCats).sort();
      /*alphaArr.forEach((v,i)=>{
        let newName = all[v].sort+'-'+v
        console.log(newName);
        //let newObj = { [all[v].sort+'-'+v]: { slug: all[v].slug, image: all[v].image, name: all[v].name }};
        //console.log(newObj);
      })*/
      let alphaCats = [];
      //console.log(all);
      alphaArr.forEach((v,i)=>{
        if(all[v]){
          //console.log(all[v]);
          all[v].slug = v;

          alphaCats.push(all[v]);
        } else {
          console.log('No category matching "'+v+'"');
        }
      });
      state.alphaCats = alphaCats.sort((o1,o2)=>{return o1.sort - o2.sort});
    }
  }
})
