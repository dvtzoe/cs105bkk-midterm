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
  import ex from "../examples/q05_property.py?raw";
</script>

<Slide>
  <SlideTitle n={5}
    >What is encapsulation, and what does @property do?</SlideTitle
  >
  <Columns cols="1fr 1.3fr">
    <Stack>
      <Definition>
        <p>
          <strong>Encapsulation</strong>: an object keeps its own isolated
          controlled data so outside code can't break them.
        </p>
        <p>
          <code>@property</code> turns a method into something you use like an attribute,
          lets you runs something to get the data without storing it in another variable.
        </p>
      </Definition>
      <UseCase>
        A class that wants lots of attributes, but calculatable so they don't
        have to store everything.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="property.py" />
      <Output
        title="python"
        text={">>> t = Temperature(25)\n>>> t.kelvin\n298.15"}
      />
    </Stack>
  </Columns>
</Slide>
