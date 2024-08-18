<script setup lang="ts">
import { ICard, type IColumn } from '~/components/kanban/kanban.types';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import CardFooter from '~/components/ui/card/CardFooter.vue';
import CardHeader from '~/components/ui/card/CardHeader.vue';

useSeoMeta({
  title: 'Home | CRM System',
});

const dragCard = ref<ICard | null>(null);
const sourceColumn = ref<IColumn | null>(null);
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10 text-white">CRM System by RED Group</h1>
    <Card class="text-white mb-3" draggable="true">
      <CardHeader role="button"> name card </CardHeader>
      <CardContent> Компания </CardContent>
      <CardFooter> Date </CardFooter>
    </Card>
  </div>
</template>

<style scoped>
</style>