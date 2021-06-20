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
      :items="staffArr"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: ['dataPlans', 'dataEmplayees'],
    methods: {
      staffObj (name) {
        return {name: name, plan: 0, fact: 0, factpercent: 0}
      },
      removeNewStaff () {
        this.newStaff.splice(0, this.newStaff.length)
      }
    },
    computed: {
      staffArr () {
        this.removeNewStaff()
        this.dataEmplayees.forEach(element => {
          this.newStaff.push(this.staffObj(element))
        });
        return this.newStaff
      }
    },
    data () {
      return {
        search: '',
        newStaff: [],
        headers: [
          {
            text: 'Сотрудники',
            align: 'start',
            value: 'name',
          },
          { text: 'План', value: 'plan' },
          { text: 'Факт', value: 'fact' },
          { text: 'Факт (%)', value: 'factpercent' }
        ],
        staff: [ // не используется, пример объекта для таблицы
          {
            name: 'Денис Хренов',
            plan: 159,
            fact: 6,
            factpercent: 24
          },
          {
            name: 'Алена Попова',
            plan: 237,
            fact: 9,
            factpercent: 37
          }
        ],
      }
    },
  }
</script>