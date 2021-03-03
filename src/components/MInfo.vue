<template>
  <hr v-if="info == 'hr'" />
  <ul :class="{['section-content']:true,['li-section-content']:pType=='template'}" v-else-if="Array.isArray(info)">
    <li v-for="subInfo in info" :class="{['list-style-none']: Array.isArray(subInfo) || subInfo =='hr' }" :key="subInfo.toString()">
      <MInfo :info="subInfo" pType="template"></MInfo>
    </li>
  </ul>
  <p v-else-if="pType=='p'" class="item-des">{{info}}</p>
  <template v-else>{{info}}</template>
</template>

<script>
export default {
  name:'MInfo',
  props:{
    info: {
      type: [String,Array],
      default: ''
    },
    pType: {
      type:String,
      default:'p'
    }
  },
  setup(){
    return {}
  }
}
</script>