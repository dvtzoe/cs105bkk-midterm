<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q03_class_object.py?raw';
</script>

<Slide>
  <SlideTitle n={3}>What is a class, and what is an object?</SlideTitle>
  <Columns cols="1fr 1.15fr">
    <Stack>
      <Definition>
        <p>A <strong>class</strong> is a blueprint: it describes what data and behaviour a kind of thing has.</p>
        <p>An <strong>object</strong> (instance) is one concrete thing built from that blueprint, with its own data.</p>
      </Definition>
      <UseCase>
        In a game, a <code>Player</code> class describes health and position; every player in the match is a separate <code>Player</code> object.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="class_object.py" />
      <Output text={'Rex says woof\nFido says woof Dog'} />
    </Stack>
  </Columns>
</Slide>
