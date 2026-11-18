<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q01_aliasing.py?raw';
</script>

<Slide>
  <SlideTitle n={1}>What is the difference between a name and an object, and what is aliasing?</SlideTitle>
  <Columns cols="1fr 1.15fr">
    <Stack>
      <Definition>
        <p>An <strong>object</strong> is the actual value living in memory. A <strong>name</strong> is just a label that points to an object.</p>
        <p><strong>Aliasing</strong> is when two names point to the same object, so changing it through one name shows up through the other.</p>
      </Definition>
      <UseCase>
        Passing a list into a function: the function gets an alias, so it can change the caller's list. Use <code>.copy()</code> when you don't want that.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="aliasing.py" />
      <Output text={'[1, 2, 3, 4]\nTrue\nTrue False'} />
    </Stack>
  </Columns>
</Slide>
