<template>
  <div class="hero">
    <div class="all_images">
      <div class="topbanner"> 
        <b-img :src="images.topbanner" fluid alt="Responsive image" style="width:100%" />
      </div>
      <div>
        <div :background="bodybanner1" fluid="" alt="Responsive image" style="background-repeat: no-repeat; background-size:cover; background-image: url(&quot;static/img/자동차랜딩페이지2.cc9645c.png&quot;);width: 100%;height: 550px;float: left;">
          <form style="
              position: relative;
              left: 1320px;
              top: 200px;
              width: 750px;
              height: 300px;
          ">
            <div class="row contract" ><div class="col-sm-3">계약: </div> 
              <div class="col-sm-3">
                <select id="usertypes" required="required" aria-required="true" class="form-control custom-select">
                  <option value="">Select One</option>
                    <option value="개인">개인</option>
                    <option value="법인사업자">법인사업자</option>
                    <option value="개인사업자">개인사업자</option>
                </select>
              </div>
            </div> 
            <div class="row counselling">
              <div class="col-sm-3">상담구분: </div> 
                <div class="col-sm-3">
                  <select id="cartypes" required="required" aria-required="true" class="form-control custom-select">
                    <option value="">Select One</option>
                    <option value="신차">신차</option>
                    <option value="장기렌터카">장기렌터카</option>
                    <option value="리스">리스</option>
                  </select>
                 </div>
            </div>
            <div class="row field">
              <div class="col-sm-3">성명: </div>
              <div class="col-sm-9">
                <input type="text" name="name" required="required" class="input">
              </div>
            </div>
            <div class="row field">
              <div class="col-sm-3">연락처: </div> 
                <div class="col-sm-9">
                  <input type="text" name="contact" required="required" class="input">
                </div>
            </div> 
            <div class="row submit">
              <div class="col">
                <button type="submit" class="btn my-2 my-sm-0 btn-outline-success">제출</button>
              </div>
            </div>
       </form>

      </div>
      </div>
      <div>
        <b-img :src="images.bodybanner2" id="thirdimg" fluid alt="Responsive image" style="width:100%"/>
      </div>
      <div>
        <b-img :src="images.bottombanner" fluid alt="Responsive image" style="width:100%"/>
      </div>
          <!-- <b-container fluid>
              <form>
                <b-row class="contract">
                  <b-col sm="3" >계약: </b-col> 
                  <b-col sm="3">
                    <b-form-select id="usertypes"
                      :options="types"
                      required
                      v-model="user.types">
                     </b-form-select>
                  </b-col>
                </b-row>
                <b-row class="counselling">
                  <b-col sm="3" class="white">상담구분: </b-col>
                  <b-col sm="3">
                    <b-form-select id="cartypes"
                      :options="cartypes"
                      required
                      v-model="user.cartypes">
                     </b-form-select>
                  </b-col>
                </b-row>
                <b-row class="field">
                  <b-col sm="3" >성명: </b-col>
                  <b-col sm="9" class="nameposition"><input type="text" class="input" name="name" v-model="user.name" required/></b-col>
                </b-row>
                <b-row class="field">
                  <b-col sm="3">연락처: </b-col>
                  <b-col sm="9" class="contactposition"><input type="text" class="input" name="contact" v-model="user.contact" required/></b-col>
                </b-row>
                <b-row class="submit">
                  <b-col sm="9"><b-button @click="submit" variant="outline-success" id="submit" type="submit" class="submit">제출</b-button></b-col>
                </b-row>
                <hr>
              </form>  
          </b-container>
      <h1 class="display-3">저희가 알아봐드립니다 !</h1>
      <p class="lead">각 딜러사마다 다른 차종별 할인 혜택 및 프로모션 <br />여기저기 전화하시기 너무 번거로우시죠?</p>
      <p class='follow'>각 브랜드별로 뻗어있는 딜러사만 적어도4-5개 <br />하나하나 전화하기엔 시간낭비 ! <br /> 평생오일교환권, 골프백 등 다양한 용품도 할인과함께 알아보세요</p>
      <hr size=2 width=100%> -->
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'adpage',
  data () {
    return {
      user: {
        types: '',
        cartypes: '',
        name: '',
        contact: ''
      },
      types: [
        {text: 'Select One', value: null},
        '개인', '법인사업자', '개인사업자'
      ],
      cartypes: [
        {text: 'Select One', value: null},
        '신차', '장기렌터카', '리스'
      ],
      images: {
        topbanner: require('../components/assets/자동차랜딩페이지1.png'),
        bodybanner1: require('../components/assets/자동차랜딩페이지2.png'),
        bodybanner2: require('../components/assets/자동차랜딩페이지3.png'),
        bottombanner: require('../components/assets/자동차랜딩페이지4.png')
      }
    }
  },

  methods: {
    submit: function () {
      console.log('Submit button has been pressed')
      let uri = 'http://localhost:4000/addusers'
      var data = {name: this.user.name, contact: this.user.contact, types: this.user.types, cartypes: this.user.cartypes}
      axios.post(uri, {data: data})
        .then((response) => {
          console.log(response)
          console.log('Post has been successful')
        })
      alert(JSON.stringify(this.user))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* .hero {
    height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero .display-3 {
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
    padding-left: 465pt;
    text-align: left;
  }
  .hero .follow {
    font-weight: 200;
    font-size: 1.0rem;
    text-align: left;
    padding-left: 465pt;
  } */
  .all_images{
    /* max-height:100%;
    max-width:100%;
    object-fit: contain; */
    overflow:auto; /* or overflow:auto; if you want scrollbars */
  }
  
  .submit {
    position: relative;
    left: 250px;
    top: 10px;
  }

  .contract {
    color: white;
    position: relative;
    top: -10px;
  }

  .counselling {
    color: white;
    position: relative;
    bottom: 5px;
  }

  .field {
    color: white;
    position: relative;
    bottom: 0px;
  
  }

  .white {
    position: relative;
    bottom: 3px;
  }

  .input {
    position: relative;
    bottom: -3px;
  }

  #submit{
    position: relative;
    left: 250px;
    top: 10px;
  }

.hero .bodybanner1 {
  background-image: url('../components/assets/자동차랜딩페이지2.png');
  position: fixed;
}

#thirdimg {
  /* position: relative;
  margin-top: 20px; */
}
</style>
