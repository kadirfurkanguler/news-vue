import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        news:[],
        weather:[],
        covid:{}
    },
    getters:{},
    mutations:{
        setNews(state,value){
            state.news=value;
        },
        setWeather(state,value){
            state.weather=value
        },
        setCovid(state,value){
            state.covid=value
        }
    },
    actions:{
       async loadNews({commit}){
           let response = await axios.post("http://eventregistry.org/api/v1/article/getArticles?apiKey=6288ad78-f544-4675-960c-593d8dd37be3",{
                "action": "getArticles",
                "keyword": "türkiye",
                "articlesPage": 1,
                "articlesCount": 140,
                "articlesSortBy": "date",
                "articlesSortByAsc": false,
                "articlesArticleBodyLen": -1,
                "resultType": "articles",
                "dataType": [
                  "news",
                  "pr"
                ],
                "lang":"tur",
                "apiKey": "6288ad78-f544-4675-960c-593d8dd37be3",
                "forceMaxDataTimeWindow": 31,
              },{
                    Headers:{
                        "content-type":"application/json"
                    }
              })
            commit("setNews",response.data.articles.results);
           // console.log(response.data.articles.results)
            
        },
        getWeather({commit}){
            var x={}; 
            var e={};
            var ip='';
            var weat=[];
            async function postData(url = '') {
            const response = await fetch(url, {
                
                headers: {
                'Content-Type': 'application/json',
                'authorization':'apikey 0yyK8kMiBNUNOjJPsCF26T:62HVx6l1BcxEf6qQx0NNIn' 
                },
            });
            return response.json();
            }
            async function loadIp (){
            x=await(await fetch('https://api.ipify.org/?format=json')).json()
           // console.log(x.ip.toString())  
            ip=x.ip.toString()
            e=await(await fetch('https://ipapi.co/'+ip+'/json/')).json()
             //   console.log(e.city)
             postData('https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city='+e.city)
            .then(data => {
                //console.log(data);
                weat=data.result
              //  console.log(weat)
                commit("setWeather",weat)
            });
            }
             loadIp();
        },
        getCovid({commit}){
            var x={}
            async function get(){
            x=await(await fetch('https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true')).json()
           // console.log(x)
            commit("setCovid",x)
            }
            get()
        }
    }
})