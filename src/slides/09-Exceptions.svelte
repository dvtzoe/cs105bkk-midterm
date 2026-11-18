<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q09_exceptions.py?raw';
</script>

<Slide>
  <SlideTitle n={9}>What is an exception, and how do try and except work?</SlideTitle>
  <Columns cols="1fr 1.2fr">
    <Stack>
      <Definition>
        <p>An <strong>exception</strong> is an error object raised while the program runs. If nothing handles it, the program crashes.</p>
        <p>Code in <code>try</code> runs; if it raises, Python jumps to the matching <code>except</code>. <code>else</code> runs on success, <code>finally</code> always.</p>
      </Definition>
      <UseCase>
        Validating user input, or handling a missing file or a failed network request without crashing the whole app.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="exceptions.py" />
      <Output text={"Not a number: invalid literal for int() with base 10: 'abc'\ndone"} />
    </Stack>
  </Columns>
</Slide>
