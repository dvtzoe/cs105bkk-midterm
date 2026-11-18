<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q04_dunder.py?raw';
</script>

<Slide>
  <SlideTitle n={4}>What are dunder methods such as __repr__, __str__ and __eq__?</SlideTitle>
  <Columns cols="1fr 1.35fr">
    <Stack>
      <Definition>
        <p>"Double underscore" methods that Python calls for you to make your objects work with built-in syntax.</p>
        <ul>
          <li><code>__repr__</code>: unambiguous, for developers</li>
          <li><code>__str__</code>: readable, for <code>print()</code></li>
          <li><code>__eq__</code>: what <code>==</code> means</li>
        </ul>
      </Definition>
      <UseCase>
        Readable logs and debugging output, and comparing objects in tests with <code>assert a == b</code>.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="dunder.py" />
      <Output text={'Point(1, 2) (1, 2) True'} />
    </Stack>
  </Columns>
</Slide>
