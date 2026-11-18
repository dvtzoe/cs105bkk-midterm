<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output, Callout } from '$lib';
  import ex from '../examples/q06_inherit_compose.py?raw';
</script>

<Slide>
  <SlideTitle n={6}>What is inheritance, what is composition, and how do you choose?</SlideTitle>
  <Columns cols="1fr 1.3fr">
    <Stack>
      <Definition>
        <p><strong>Inheritance</strong>: a class extends another and reuses its code (<em>is-a</em>).</p>
        <p><strong>Composition</strong>: a class holds other objects as parts (<em>has-a</em>).</p>
      </Definition>
      <UseCase>
        GUI widgets inherit from a base <code>Widget</code>; a <code>Car</code> is composed of an engine and wheels you can swap.
      </UseCase>
      <Callout tone="tip">Rule of thumb: if "X is a Y" sounds wrong, use composition.</Callout>
    </Stack>
    <Stack>
      <Code src={ex} file="inherit_compose.py" />
      <Output text={'meow vroom'} />
    </Stack>
  </Columns>
</Slide>
