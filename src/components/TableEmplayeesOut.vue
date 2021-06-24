<template>
  <v-card>
    <v-card-title>
      Выбранные сотрудники
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
    >
    </v-data-table>
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-btn
              depressed
              color="primary"
            >
              Сохранить
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
  </v-card>
</template>

<script>
export default {
  name: "TableEmplayeesOut",
  data () {
    return {
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
      return this.$store.getters.CHANGE_STAFF;
    }
  }
}
</script>