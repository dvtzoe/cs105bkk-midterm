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
  import ex from "../examples/q04_dunder.py?raw";
</script>

<Slide>
  <SlideTitle n={4}
    >What are dunder methods such as __repr__, __str__ and __eq__?</SlideTitle
  >
  <Columns cols="1fr 1.35fr">
    <Stack>
      <Definition>
        <p>
          "Double underscore" methods that integrates with python syntaxes,
          prefixed and subfixed so you know it isn't yours.
        </p>
        <ul>
          <li><code>__repr__</code>: detailed data for developers</li>
          <li><code>__str__</code>: readable for <code>print()</code></li>
          or any ui
          <li><code>__eq__</code>: used in <code>==</code></li>
        </ul>
      </Definition>
      <UseCase>
        Readable logs and debugging output, and comparing objects with custom
        classes.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="dunder.py" />
      <Output text={"Point(1, 2) (1, 2) True"} />
    </Stack>
  </Columns>
</Slide>
