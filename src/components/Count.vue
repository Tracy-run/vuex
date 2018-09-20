<template>
    <div>
        <h2>
            {{ msg }}<hr>
        </h2>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)" >+</button>
            <button @click="reduce" >-</button>
        </p>
        <p>
            <button @click="addAction" >+</button>
            <button @click="reduceAction" >-</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
export default {
    data(){
        return {
            msg:'Hello vuex'
        }
    },
    // 第一种简写的方法
    // computed:{
    //   count(){
    //       return this.$store.state.count;
    //   }  
    // },

    // the second method
    // computed:mapState({
    //     count:state=>state.count
    // }),
    
    // computed:mapState({
    //     count:function(state){
    //         return state.count;
    //     }
    // }),

    // computed:mapState(['count']),  // 等价上列
    
    computed:{
        ...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // },

        // ...mapGetters(["count"])
    },
    
    // methods:mapMutations(['add','reduce']), // 简化方法的触发方式
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>