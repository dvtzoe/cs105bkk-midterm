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
  import ex from "../examples/q09_exceptions.py?raw";
</script>

<Slide>
  <SlideTitle n={9}
    >What is an exception, and how do try and except work?</SlideTitle
  >
  <Columns cols="1fr 1.2fr">
    <Stack>
      <Definition>
        <p>
          An <strong>exception</strong> is an error object raised while the program
          runs.
        </p>
        <p>
          Code in <code>try</code> runs and if it raises Python skips to the
          <code>except</code> with matching exceptions.
        </p>
      </Definition>
      <UseCase>
        handling a possible error without crashing the whole program.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="exceptions.py" />
      <Output
        text={"Not a number: invalid literal for int() with base 10: 'abc'"}
      />
    </Stack>
  </Columns>
</Slide>
