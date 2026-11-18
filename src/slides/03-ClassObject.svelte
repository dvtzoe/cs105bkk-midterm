<script lang="ts">
  import {
    Slide,
    SlideTitle,
    Columns,
    Stack,
    Definition,
    UseCase,
    Code,
    Output,
  } from "$lib";
  import ex from "../examples/q03_class_object.py?raw";
</script>

<Slide>
  <SlideTitle n={3}>What is a class, and what is an object?</SlideTitle>
  <Columns cols="1fr 1.15fr">
    <Stack>
      <Definition>
        <p>
          A <strong>class</strong> is a way to describes what data and behaviour
          a kind of thing has.
        </p>
        <p>
          An <strong>object</strong> is the vaule built from some
          <code>class</code>, with its own data.
        </p>
      </Definition>
      <UseCase>
        Anywhere that needs lots of data with complex structures or behaviour,
        with reusable patterns
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="class_object.py" />
      <Output text={"Hibiki says woof\nUmika says woof Dog"} />
    </Stack>
  </Columns>
</Slide>
