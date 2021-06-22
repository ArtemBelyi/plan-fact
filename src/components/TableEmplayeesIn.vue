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
            value: 'ID',
          },
          { text: 'ФИО', value: 'name' },
          { text: 'Должность', value: 'position' }
        ],
        emplayees: [
          {
            ID: 78,
            name: 'Денис Хренов',
            position: 'Аналитик'
          },
          {
            ID: 77,
            name: 'Денис Новичков',
            position: 'Маркетолог'
          },
          {
            ID: 76,
            name: 'Роман Зимин',
            position: 'Разработчик'
          },
          {
            ID: 75,
            name: 'Роман Кычин',
            position: 'Разработчик Yii'
          }
        ]
      }
    }
}
</script>
