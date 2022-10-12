<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ChartCustomize from '@/app/components/ChartCustomize.vue';
import { getTrackTimetable, getUserSubscribedSubject } from '@/services/users';

export default defineComponent({
  name: 'AnalysisChart',
  components: {
    ChartCustomize,
  },
  setup() {
    const trackTimetableData = ref([] as number[]);
    const subscribedSubjectData = ref([] as number[]);

    const trackTimetable = async () => {
      const res = await getTrackTimetable();
      trackTimetableData.value.push(res.trackTimetable);
      trackTimetableData.value.push(res.noTrackTimetable);
    };

    const userSubscribedSubject = async () => {
      const res = await getUserSubscribedSubject();
      subscribedSubjectData.value.push(res.subscribedSubject);
      subscribedSubjectData.value.push(res.noSubscribedSubject);
    };

    onMounted(async () => {
      await trackTimetable();
      await userSubscribedSubject();
    });

    return {
      trackTimetableData,
      subscribedSubjectData,
    };
  },
});
</script>

<template>
  <div v-if="trackTimetableData.length > 0" class="mr-10">
    <h3 class="text-2xl">Biểu đồ sử dụng dịch vụ Track Timetable</h3>
    <ChartCustomize
      :labels="['trackTimetable', 'noTrackTimetable']"
      :data="trackTimetableData"
      :background-color="['#42A5F5', '#66BB6A', '#FFA726']"
      :hover-background-color="['#64B5F6', '#81C784', '#FFB74D']"
    />
  </div>

  <div v-if="subscribedSubjectData.length > 0" class="ml-10">
    <h3 class="text-2xl">Biểu đồ sử dụng dịch vụ Subscribed Subject</h3>
    <ChartCustomize
      :labels="['subscribedSubject', 'noSubscribedSubject']"
      :data="subscribedSubjectData"
      :background-color="['#ed4981', '#fccc55', '#FFA726']"
      :hover-background-color="['#f46697', '#f6cf6f', '#FFB74D']"
    />
  </div>
</template>

<style scoped></style>
