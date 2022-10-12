<script lang="ts">
import AnalysisChart from '@/app/containers/AnalysisChart.vue';
import { getTheNumberOfUsersFithouTool } from '@/services/fithou';
import { onMounted, ref } from 'vue';

export default {
  components: {
    AnalysisChart,
  },
  setup() {

    const numberOfUsersFithouToolData = ref(0);

    const numberOfUsersFithouTool = async () => {
      numberOfUsersFithouToolData.value = await getTheNumberOfUsersFithouTool();
    };

    onMounted(async () => {
      await numberOfUsersFithouTool();
    });

    return {
      numberOfUsersFithouToolData,
    };
  },
};
</script>

<template>
  <div class="flex flex-col text-2xl w-full h-full">
    <div>
      <h2>
        Số lượng người dùng fithou serivce: {{ numberOfUsersFithouToolData }}
      </h2>
    </div>
    <div class="text-xs flex items-center justify-center w-full mt-52">
      <AnalysisChart />
    </div>
  </div>
</template>
