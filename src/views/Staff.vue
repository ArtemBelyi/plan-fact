<template>
  <div>
    <h1 class="headline pb-5">Выбор сотрудников</h1>
    <v-container>
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12>
            <TableEmplayeesIn/>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-btn
              depressed
              color="primary"
            >
              Добавить
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12>
           <TableEmplayeesOut/>
          </v-flex>
        </v-layout>
      </v-card>
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
    </v-container>
  </div>
</template>

<script>
import TableEmplayeesIn from '../components/TableEmplayeesIn.vue';
import TableEmplayeesOut from '../components/TableEmplayeesOut.vue';
export default {
  name: "Staff",
  components: { TableEmplayeesIn, TableEmplayeesOut}
};
</script>