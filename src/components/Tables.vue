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
      removeNewStaff () {
        this.newStaff.splice(0, this.newStaff.length)
      }
    },
    computed: {
      staffArr () {
        this.removeNewStaff();
        const changeStaff = this.$store.getters.CHANGE_STAFF; 
        this.dataEmplayees.forEach(elem => {
          changeStaff.forEach(item => {
            if (elem == item.name) {
              this.newStaff.push(item);
            }
          })
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
            text: 'ID',
            align: 'start',
            value: 'id',
            sortable: false,
          },
          {
            text: 'ФИО',
            align: 'start',
            value: 'name',
            sortable: false,
          },
          {
            text: 'Должность',
            align: 'start',
            value: 'username',
            sortable: false,
          },
          { text: 'E-mail', 
            align: 'start',
            value: 'email',
            sortable: false
          },
          { text: 'Факт', 
            align: 'start',
            value: 'fact',
            sortable: false
          },
          { text: 'План', 
            align: 'start',
            value: 'plan',
            sortable: false
          },
          { text: '% выполнения', 
            align: 'start',
            value: 'pla',
            sortable: false
          }
        ],
      }
    },
  }
</script>