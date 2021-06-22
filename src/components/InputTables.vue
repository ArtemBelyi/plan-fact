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
    <template v-slot:[`item.plan`]="{ item }">
      <v-edit-dialog
          :return-value.sync="item.plan"
          large
          persistent
          @save="save"
          @close="close"
        >
        <div>{{ item.plan }}</div>
        <template v-slot:input>
            <div class="mt-4 text-h6">
              Введите план
            </div>
            <v-text-field
              v-model="item.plan"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
    </template>
    </v-data-table>
    <v-snackbar
      v-model="snack"
      :timeout="1500"
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          text
          @click="snack = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    props: ['selectedPlans', 'dataEmplayees'],
    methods: {
      staffObj (name) {
        return { name: name, plan: 0 }
      },
      removeNewStaff () {
        this.newStaff.splice(0, this.newStaff.length)
      },
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
      },
      close () {
        console.log('Dialog closed')
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
            sortable: false,
          },
          { text: 'План', 
            value: 'plan',
            sortable: false
          }
        ],
        snack: false,
        snackColor: '',
        snackText: '',
        max25chars: v => v.length <= 25 || 'Input too long!',
        pagination: {}
      }
    },
  }
</script>