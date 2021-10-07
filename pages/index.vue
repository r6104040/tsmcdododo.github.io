<template>
  <div>
    {{ localdata }}
    <audio src="https://raw.githubusercontent.com/r6104040/tsmcdododo.github.io/main/static/images/sunsun.mp3" controls></audio>
    <div v-for='date of date' :key="date.class" >
                <p>{{date.text}}</p>
          {{ getImgUrl(date.src) }}
          
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
          date: [
            {class: '1',  src: '1.jpg', text : 'Title 1'},
            {class: '2', src: '1.jpg',  text : 'Title 2'},
            {class: '3', src: '1.jpg',  text : 'Title 3'}
            ],
            ddad: [],
            localdata: []
        }
    },
    mounted() {
    this.importAll(require.context('../static/images/', true, /\.jpg$/));

    },
    methods: {
      importAll(r) {
      r.keys().forEach(key => (this.localdata.push({ pathLong: r(key), pathShort: key })));
    },
        getImgUrl(pic) {
            return require('../static/images/' + pic)
        },
         getCountry(){
            //  讀取radio的值
            var form = document.getElementById("form_name");
            for(var i=0; i<form.language.length;i++){
                if(form.language[i].checked){
                    var language = form.language[i].value;
                    alert(language);
                }
            }
            //  讀取select的值
            var country = form.country.value;
            alert(country);
        },
//  寫入內容到HTML元素中
        //  寫入內容到INPUT
        WriteValue(){                              
            document.getElementById("input").value="12345";
        },
        //  寫入內容到DIV或SPAN
        WriteOnScreen(){                             
            document.getElementById("screen").innerHTML = "2+3"
        },

//  讀取HTML元素
         //讀取INPUT的內容
        ShowValue(){                               
            var v = document.getElementById("input").value ;
            alert(v);
        },
         //讀取DIV或SPAN的內容
        ShowOnScreen(){                            
            var v = document.getElementById("screen")
            alert(v.innerHTML);
        }
    }
  }
</script>

<style scoped>
.container
  {margin-top: 30px}
.container h1 {
  text-align: center;
}
.container h2 {
  text-align: center;
  color: white;
  padding-top: 15%;
}
.swiper {
  height: 360px;
}
</style>
