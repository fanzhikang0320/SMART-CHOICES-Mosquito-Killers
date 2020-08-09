<template>
  <div class="product-wrapper">
      <div :class="{'product-item':true ,'first-item': index == 0,'last-item': index == productData.length - 1}" v-for="(product,index) in productData" :key="index">
          <div class="number" v-if="index != productData.length - 1"><span>{{index + 1}}</span></div>
          <a :href="product.link" target="_blank" @click.stop="handleExecute"  class="product-link">
            
            <div class="streamer" v-if="index == productData.length - 1">
                <span>The Most Popular Anti Mosquito Device In 2020</span>
            </div>
            <div class="product-container">
                <img :src="product.picture" :alt="product.name" class="picture">
                <div class="container-center">
                    <div class="big-title" v-if="index == 0">
                        <span>Most Popular Product</span>
                    </div>
                    <h4 class="product-name">{{product.name}}</h4>
                    <ul class="desc-list">
                        <li v-for="(item,id) in product.descList" :key="id">
                            <span class="icon"></span>
                            <p class="text">{{item.text}}</p>
                        </li>
                    </ul>
                     <p class="buys" v-if="index == 0 || index == productData.length - 1">Over 954 people chose this product today!</p>
                </div>
                <div class="container-right">
                    <span class="score">{{product.score}}</span>
                    <div class="star">
                        <Star :score="+product.score" :max="10"/>
                    </div>
                    <a :href="product.link" @click.stop="handleExecute" target="_blank" class="btn"><span class="text">Visit Site</span><span class="icon"></span></a>
                    <!-- <a href="/" class="review">Read Our Review</a> -->
                </div>
            </div>
          </a>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            productData: [
                {
                    id: 1,
                    name: 'Buzz B-Gone',
                    link: 'https://www.frstbte.com/7QLQCMW/5BQ7RRJ/?uid=7067',
                    picture: require('../assets/image/anti/BBG.png'),
                    descList: [
                        {
                            text: 'Smart light sensor'
                        },
                        {
                            text: 'It is lightweight and portable'
                        },
                        {
                            text: 'No harmful chemical spray'
                        },
                        {
                            text: 'USB port support outdoor activity'
                        },
                        {
                            text: 'Highly efficient, with its ultraviolet (UV) light emitted quick'
                        },
                        {
                            text: 'Robust 360-Degree Fan is powerful'
                        },
                        {
                            text: 'Keep 70% of mosquitos away'
                        },
                        {
                            text: 'Put an end to itching, burning mosquito bites'
                        }
                    ],
                    score: '9.8',
                    buys: 767
                },
                {
                    id: 2,
                    name: 'MoskiX Band',
                    link: 'https://hypertechx.com/ps/moskixband/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    picture: require('../assets/image/anti/MB.png'),
                    descList: [
                        {
                            text: 'Easy to use'
                        },
                        {
                            text: 'It charges incredibly fast'
                        },
                        {
                            text: '130 hours of battery life and a whole month worth of standby'
                        },
                        {
                            text: 'Simply put it on your wrist'
                        },
                        {
                            text: 'There are no fumes, no odors, and no potential side effects'
                        }
                    ],
                    score: '9.5',
                    buys: 1000
                },

                {
                    id: 3,
                    name: 'Mosquitron LED',
                    link: 'https://hyperstech.com/intl_8/?prod=moskitronled&net=9785&aff=%7BAFFID%7D&sid=%7BSUBID%7D&cid=%7BCLICKID%7D',
                    picture: require('../assets/image/anti/ML.png'),
                    descList: [
                        {
                            text: 'Up to 100 sq meters indoor/outdoor coverage'
                        },
                        {
                            text: 'Bionic technology LED light'
                        },
                        {
                            text: 'Powerful fan will trap mosquitoes'
                        },
                        {
                            text: 'Low power consumption'
                        },
                        {
                            text: 'USB powered device'
                        }
                    ],
                    score: '9.0',
                    buys: 1000
                },
                {
                    id: 4,
                    name: 'Mosquitron',
                    link: 'https://hypertechx.com/ps/mosquitron/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    picture: require('../assets/image/anti/M.png'),
                    descList: [
                        {
                            text: 'Running throughout the night'
                        },
                        {
                            text: 'Drawing power from any USB source'
                        },
                        {
                            text: 'Impossible for the bugs to escape'
                        },
                        {
                            text: 'Easy to transport and move around the home'
                        },
                        {
                            text: 'The automated sensor will detect the light '
                        },
                        {
                            text: 'Simple operating instructions '
                        }
                    ],
                    score: '8.8',
                    buys: 1000
                },
                
                {
                    id: 1,
                    name: 'Buzz B-Gone',
                    link: 'https://www.frstbte.com/7QLQCMW/5BQ7RRJ/?uid=7067',
                    picture: require('../assets/image/anti/BBG.png'),
                    descList: [
                        {
                            text: 'Smart light sensor'
                        },
                        {
                            text: 'It is lightweight and portable'
                        },
                        {
                            text: 'No harmful chemical spray'
                        },
                        {
                            text: 'USB port support outdoor activity'
                        },
                        {
                            text: 'Highly efficient, with its ultraviolet (UV) light emitted quick'
                        },
                        {
                            text: 'Robust 360-Degree Fan is powerful'
                        },
                        {
                            text: 'Keep 70% of mosquitos away'
                        },
                        {
                            text: 'Put an end to itching, burning mosquito bites'
                        }
                    ],
                    score: '9.8',
                    buys: 767
                }
            ]
        }
    },
    methods: {
        handleExecute() {
            window.execute();
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/productAnti.less');
</style>