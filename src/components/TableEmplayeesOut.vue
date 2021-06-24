<template>
  <v-card>
    <v-card-title>
      Выбранные сотрудники
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    name: "TableEmplayeesOut",
    data () {
        return {

        }
    }
}
</script>