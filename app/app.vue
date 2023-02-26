<template>
  <Page>
    <ActionBar>
      <Label text="Home" class="font-bold text-lg" />
    </ActionBar>

    <StackLayout class="container p-4">
      <Label>
        <FormattedString>
          <Span text="counter: " />
          <Span :text="counter" class="rounded-full p-4" />
        </FormattedString>
      </Label>

      <WrapLayout flexGrow="1">
        <Button width="50%" @tap="descrease" text="-" />

        <Button width="50%" @tap="increase" text="+" />
      </WrapLayout>
    </StackLayout>
  </Page>
</template>

<script>
// Database
import { createDB, updateData, getData } from "./sqlite";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
      updateData(this.counter);
    },
    descrease() {
      if (this.counter) {
        this.counter--;
        updateData(this.counter);
      }
    },
  },
  mounted() {
    console.log(1);
    createDB();
    this.counter = getData();
    console.log(getData());
  },
};
</script>

<style lang="scss">
@import "./assets/variables.scss";
@import "./assets/reset.scss";

:root {
  font-size: 16;
}
</style>
