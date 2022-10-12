<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Chart from 'primevue/chart';

export default defineComponent({
  name: 'ChartCustomize',
  components: {
    Chart,
  },
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    backgroundColor: {
      type: Array,
      required: true,
    },
    hoverBackgroundColor: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartData = reactive({
      labels: props.labels || [],
      datasets: [
        {
          data: props.data || [],
          backgroundColor: props.backgroundColor || [],
          hoverBackgroundColor: props.hoverBackgroundColor || [],
        },
      ],
    });

    const lightOptions = reactive({
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
    });

    return { chartData, lightOptions };
  },
});
</script>

<template>
  <Chart type="pie" :data="chartData" :options="lightOptions" />
</template>

<style lang="scss" scoped></style>
