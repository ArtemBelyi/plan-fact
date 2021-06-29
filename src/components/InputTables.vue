<template>
  <v-card>
    <v-card-title>
      {{ selectedPlans }}
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
      <v-text-field
        label="Введите план"
        single-line
        counter
        autofocus
        return-value
        v-on:change="planschange(item, $event)"
      >
      </v-text-field>
    </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: ['selectedPlans', 'dataEmplayees'],
    methods: {
      removeNewStaff () {
        this.newStaff.splice(0, this.newStaff.length)
      },
      planschange (item, event) {
       if (item.plans) {
         item.plans.push({name: this.selectedPlans, target: event})
       } else {
         item.plans = [{name: this.selectedPlans, target: event}]
       }
       console.log(this.staffArr);
       console.log(this.$store.state.changeStaff);
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
          { text: 'План', 
            align: 'start',
            value: 'plans',
            sortable: false
          }
        ],
        snack: false,
        snackColor: '',
        snackText: '',
        //max25chars: v => v.length <= 25 || 'Input too long!', //выдает ошибку так как plans сейчас нет
        pagination: {}
      }
    },
  }
</script>