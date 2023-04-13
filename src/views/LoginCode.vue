<template>
    <n-button @click="showModal = true">
        来吧
    </n-button>
    <n-modal
        v-model:show="showModal"
        class="custom-card"
        preset="card"
        :style="bodyStyle"
        title="卡片预设"
        size="huge"
        :bordered="false"
        :segmented="segmented"
    >
    <template #header-extra>
      噢!
    </template>
    内容
  </n-modal>
</template>

<script>
import { ref } from "vue";
    export default{
        name:'LoginCode',
        setup () {
            return {
            bodyStyle: {
                width: '600px'
            },
            showModal: ref(false)
        }
    }
}
</script>

<style lang="less" scoped>

</style>