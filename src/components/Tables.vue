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
    >
    <template v-slot:[`item.plans`]="{ item }">
        {{ itemPlans(item.plans) }}
    </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: ['dataPlans', 'dataEmplayees'],
    methods: {
      removeNewStaff () {
        this.newStaff.splice(0, this.newStaff.length)
      },
      insertPlans (arr, name) {
        let props = false;
          for (let i = 0; i < arr.length; i++) {
            if (Object.values(arr[i]).includes(name)) {
              props = true
            }
          }
        return props;
      },
      itemPlans (arr) {
        let prop;
        arr.forEach(item => {
          if (item.name == this.dataPlans) {
            prop = item.target;
          }
        })
        return prop;
      }
    },
    computed: {
      staffArr () {
        this.removeNewStaff();
        const changeStaff = this.$store.getters.CHANGE_STAFF; 
        this.dataEmplayees.forEach(elem => {
          changeStaff.forEach(item => {
            if (elem == item.name && item.plans && this.insertPlans (item.plans, this.dataPlans)) {
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
            value: 'plans',
            sortable: false
          },
          { text: '% выполнения', 
            align: 'start',
            value: 'plansPercent',
            sortable: false
          }
        ],
      }
    },
  }
</script>