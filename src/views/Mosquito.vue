<template>
  <div class="mosquito-wrapper">
        <div class="maskLayer">
                <div class="mask-content clearfix">
                    <span class="close"></span>
                    <div class="mask-left">
                        <img src="@/assets/image/anti/alert-ad.jpg" alt="" class="ad">
                    </div>
                    <div class="mask-right">
                        <p class="offer">Limited Time Offer</p>
                        <p class="save"><span>SAVE</span><strong>50% MONEY</strong></p>
                        <p class="OEI">Offer Expires In</p>
                        
                        <div class="date-area">
                            <div class="time-box colon">
                                <span class="text">Hours</span>
                                <div class="time">
                                    <span class="hours-decade">0</span>
                                    <span class="hours-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box colon">
                                <span class="text">Minutes</span>
                                <div class="time">
                                    <span class="minutes-decade">0</span>
                                    <span class="minutes-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box">
                                <span class="text">Seconds</span>
                                <div class="time">
                                    <span class="seconds-decade">0</span>
                                    <span class="seconds-unit">0</span>
                                </div>
                            </div>
                        </div>
                        <p class="desc">30 Days Money Back Guarantee</p>
                        <a href="/page/buzzbgone/index.html" @click="handleExecute" target="_blank" rel="noopener noreferrer" class="btn">Get the discount today!</a>
                    </div>
                </div>
        </div>
      <header class="mosquito-header">
          <div class="header-left">
                <img src="@/assets/image/logo.png" alt="SMART CHOICES" class="logo">
                <p class="text">No longer be bothered by mosquitoes indoors or outdoors with anti mosquito devices</p>
          </div>
          <a href="/" class="btn">Top4 Anti Mosquito Devices </a>

      </header>
      <section class="banner">
          <div class="banner-container">
               <div class="banner-content">
                    <h1 class="g">2020's TOP 4</h1>
                    <h1 class="a">Anti Mosquito Devices</h1>
                </div>
          </div>
          
      </section>
      <main class="container">
          <div class="desc-area">
              <h2 class="area-title">The Best Anti Mosquito Devices In 2020</h2>
              <div class="desc-content">
                  <p>Using the best mosquito repellent devices and products to protect yourself from bites is a necessity of living or travel. </p>
                  <p>We tested some of the most popular anti mosquito devices on the market. Our researchers looked at price, product quality, ease of use, scope, effectiveness, and discount.</p>
              </div>
          </div>
          <div class="product-area">
              <p class="product-area-title">And then we sorted out 4 major options:</p>
              <ProductAnti />
          </div>
          <div class="whyTop-area">
              <h2 class="area-title">Why Buzz B-Gone is our top choice?</h2>
                <div class="whyTop-container">
                    <div class="top-container">
                        <img src="@/assets/image/anti/s1.jpg" alt="" class="picture">
                        <div class="description">
                            <p>The Buzz B-Gone electronic mosquito lamp is the best solution to your annual mosquito problem - and it works so well, you'll wonder why you've not tried it before. </p>
                        </div>
                    </div>
                    <div class="article-container">
                        
                        <img src="@/assets/image/anti/s2.jpg" alt="" class="picture">
                        <div class="article-content">
                            <p>If you're looking for mosquito protection that doesn't involve slathering yourself and your family in chemical mosquito repellent just to avoid being bitten every night, you'll love the Buzz B-Gone USB-powered mosquito lamp.</p>
                            <p>This clever device can ensure you get a peaceful night's sleep every night - and its almost-silent operation means you don't have to worry about it waking the baby. The mosquitoes will be attracted by the UV light, but are also sucked in when they are in its vicinity. The integrated rechargeable battery ensures good performance and efficiency all night long.</p>
                            <p> Once you've set up the device for mosquito repellent, you simply switch it on and can go to bed. Use it in cabins, bedrooms, kitchens, and tents (using a USB power bank to power the lamp on the go) to ensure mosquito protection wherever you go. The energy-saving Buzz B-Gone lamp consumes very little power, making it ideal to leave running throughout the night.</p>
                        </div>
                    </div>
                    <div class="step-container">
                        <div class="step-item" v-for="(step,index) in stepData" :key="index">
                            <img :src="step.picture" alt="" class="step-picture">
                            <div class="step-item-right">
                                <h4 class="step-title"><span>Step</span><span class="circle">{{index + 1}}</span></h4>
                                <p class="text">{{step.desc}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="special-container">
                        <h3 class="offer">Special Offer on Now!</h3>
                        <p class="sub">Now there is a special offer, but such a low price, there may not be much left! </p>
                        <p class="sub">So do it now!</p>
                        <p class="get-up">Get Up To <span class="big-red">50% OFF</span> Your Buzz B-Gone Today!</p>
                        <img src="@/assets/image/anti/s3.jpg" alt="" class="picture">
                        <a href="https://www.frstbte.com/7QLQCMW/5BQ7RRJ/?uid=7067" @click="handleExecute" target="_blank" rel="noopener noreferrer" class="btn">Get Your Buzz B-Gone Now!</a>
                    </div>
                </div>
          </div>

          <div class="faq-area">
              <h2 class="area-title">FAQ</h2>
              <div class="question-box">
                  <div class="question-item" v-for="(item,index) in questionData" :key="index">
                      <h3 class="question-title">{{item.title}}</h3>
                      <div class="question-content" v-html="item.content"></div>
                  </div>
              </div>
          </div>
      </main>
  </div>
</template>

<script>
import ProductAnti from '@/components/Product-anti.vue'
import $ from 'jquery'
export default {
    components: {
        ProductAnti
    },
    data() {
        return {
            stepData: [
                {
                    picture: require('../assets/image/anti/step1.png'),
                    desc: 'Plug the BUZZ B-GONE  into the USB power cord.'
                },
                {
                    picture: require('../assets/image/anti/step2.png'),
                    desc: 'Put it in bed room or a humid area.'
                },
                {
                    picture: require('../assets/image/anti/step3.png'),
                    desc: 'BUZZ B-GONE can protect your family from nasty bites now.'
                }
            ],
            questionData: [
                {
                    title: 'Q: Is the electric mosquito lamp very noisy？',
                    content: `<p>A: This clever device can ensure you get a peaceful night's sleep every night - and its almost-silent operation means you don't have to worry about it waking the baby. Because this device attracts mosquitoes by emitting ultraviolet rays, it will not make noise when it is working. You can You can drive it all night without worrying about being disturbed by the sound of the machine working.</p>`
                },
                {
                    title: 'Q: Is the use completely harmless? ',
                    content: `<p style="margin-top: 10px;">A: Some repellants require the use of dangerous chemicals that can be harmful to your body. Some of them are particularly dangerous and should not be used by children. Take deet for example, this can only be used for a certain amount of consecutive days due to the ingredients.</p>
                            <p style="margin-top: 10px;">Those kinds of devices are nonintrusive, chemical-free option that have been proven to be effective in how it keeps mosquitoes away. It is nontoxic, and kind on the environment. It does not impact your health, just keeps unwanted pests at a distance.</p>
                            <p style="margin-top: 10px;">This means there are no fumes, no odors, and no potential side effects. Because of this, it is a sensible choice for pregnant women, and young children as the lack of chemicals make it a safe, yet effective repellent for anyone. </p>`
                },
                {
                    title: 'Q: Is it completely safe to pay? ',
                    content: `<p >A: With online services there is always a certain risk. But the methods used here offer the highest possible security, so that you can be sure that the money will arrive where you send it. </p>`
                }
            ],
            timer: null,
            count: 0
        }
    },
    methods: {
        /**
         * 倒计时
         */
        countDown() {
            //结束时间
            let finishTime = new Date('2020/7/21').getTime();
            let startTime = new Date(new Date().toLocaleDateString()).getTime();
            let intervalTime = 0,
                day = 0,
                hours = 0,
                minutes = 0,
                seconds = 0;
            let that = this;
            this.timer = setInterval(function () {
                
                if (intervalTime <= 0) {
                    finishTime = new Date(new Date().toLocaleDateString()).getTime() + 1 * 24 * 60 * 60 * 1000;
                }
                intervalTime = finishTime - new Date().getTime();

                day =  Math.floor(intervalTime/(1000*60*60*24));
                hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
                minutes = Math.floor(intervalTime / (60 * 1000) % 60);
                seconds = Math.floor(intervalTime / 1000 % 60); 
                that.renderTime(hours,minutes,seconds);
                
            },1000)
            
        },
        renderTime(hours,minutes,seconds) {
            let hoursObj = this.splitCell(hours);
            let minutesObj = this.splitCell(minutes);
            let secondsObj = this.splitCell(seconds);
            $('.hours-decade').text(hoursObj.decade);
            $('.hours-unit').text(hoursObj.unit);
            $('.minutes-decade').text(minutesObj.decade);
            $('.minutes-unit').text(minutesObj.unit);
            $('.seconds-decade').text(secondsObj.decade);
            $('.seconds-unit').text(secondsObj.unit);

        },
        splitCell(num) {
            let unit = Math.floor(num % 10);
            let decade = Math.floor(num / 10);
            return {
                unit: unit,
                decade: decade
            }
        },
        alert() {
            $('.maskLayer').css({
                display: 'block'
            })
            $('.mask-content').animate({
                top: '50%',
                opacity: 1
            },300)
        },
        handleExecute() {
            window.execute();
        }
    },
    mounted() {
        this.countDown();
        let that = this;
        $('body').on('mouseenter',function () {
            $('body').one('mouseleave',function () {
                if (that.count == 0) {

                    that.alert();
                }
                that.count ++;
            })
        })
        $('.close').on('click',function (event) {
            event.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(that.timer);
        })
        $('.mask-content').on('click',function (event) {
            event.stopPropagation();
            window.open('/page/buzzbgone/index.html','_blank').location;
           
        })
        $('.maskLayer').on('click',function (e) {
            e.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(that.timer);
        })
    },
    beforeDestroy() {
        $('body').off('mouseenter');
        clearInterval(this.timer);
        this.timer = null;
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/mosquito.less');
</style>