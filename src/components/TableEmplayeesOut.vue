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
      <template v-slot:top>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Вы уверены, что хотите удалить сотрудника из списка?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Удалить</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>  
     </template>
      <template v-slot:[`item.remove`]="{ item }">
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    
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
        { text: 'Должность', value: 'username' },
        { text: '', value: 'remove', align: 'end', }
      ],
      dialogDelete: false,
      editedIndex: -1,
    }
  },
  computed: {
    emplayees() {
      return this.$store.getters.CHANGE_STAFF;
    }
  },
  methods: {
    deleteItem (item) {
        this.editedIndex = this.$store.state.changeStaff.indexOf(item)
        this.dialogDelete = true
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    },
    deleteItemConfirm () {
        this.$store.dispatch('REMOVE_ELEM_CHANGE_STAFF', this.editedIndex);
        this.closeDelete()
    },
  }
}
</script>