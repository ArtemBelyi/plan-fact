<template>
  <v-card>
    <v-card-title>
      Доступные сотрудники
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
      :items="emplayees"
      :search="search"
      v-model="selected"
      item-key="name"
      show-select
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    name: "TableEmplayeesIn",
    data () {
      return {
        selected: [],
        search: '',
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'ФИО', value: 'name' },
          { text: 'Должность', value: 'username' }
        ]
      }
    },
    computed: {
      emplayees() {
        return this.$store.getters.STAFF;
      }
    }
}
</script>
