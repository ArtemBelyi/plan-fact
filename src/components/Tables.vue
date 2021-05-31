<template>
  <v-card>
    <v-card-title>
      {{ dataPlans }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="staff"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: ['dataPlans'],
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Сотрудники',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'План', value: 'plan' },
          { text: 'Факт', value: 'fact' },
          { text: 'Факт (%)', value: 'factpercent' }
        ],
        staff: [
          {
            name: 'Frozen Yogurt',
            plan: 159,
            fact: 6.0,
            factpercent: 24
          },
          {
            name: 'Ice cream sandwich',
            plan: 237,
            fact: 9.0,
            factpercent: 37
          },
          {
            name: 'Eclair',
            plan: 262,
            fact: 16.0,
            factpercent: 23
          },
          {
            name: 'Cupcake',
            plan: 305,
            fact: 3.7,
            factpercent: 67
          },
          {
            name: 'Gingerbread',
            plan: 356,
            fact: 16.0,
            factpercent: 49
          },
          {
            name: 'Jelly bean',
            plan: 375,
            fact: 0.0,
            factpercent: 94
          },
          {
            name: 'Lollipop',
            plan: 392,
            fact: 0.2,
            factpercent: 98
          },
          {
            name: 'Honeycomb',
            plan: 408,
            fact: 3.2,
            factpercent: 87
          },
          {
            name: 'Donut',
            plan: 452,
            fact: 25.0,
            factpercent: 51
          },
          {
            name: 'KitKat',
            plan: 518,
            fact: 26.0,
            factpercent: 65
          },
        ],
      }
    },
  }
</script>