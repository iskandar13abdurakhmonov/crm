<script setup lang="ts">
import { ref } from 'vue';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import CardFooter from '~/components/ui/card/CardFooter.vue';
import CardHeader from '~/components/ui/card/CardHeader.vue';

useSeoMeta({
  title: 'Home | CRM System',
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { data, isLoading, isError, error, refetch } = useKanbanQuery();

console.log('Data from useKanbanQuery:', data);
console.log('Is Loading:', isLoading);
console.log('Is Error:', isError);
console.log('Error:', error);

</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10 text-white">CRM System by RED Group</h1>
    <div v-if="isLoading" class="text-white">Loading...</div>

    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center text-white">
            {{ column.name }}
          </div>
          <Card class="text-white mb-3" draggable="true">
            <CardHeader role="button"> Button </CardHeader>
            <CardContent></CardContent>
            <CardFooter> Date </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add specific styles if needed */
</style>
