<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q05_property.py?raw';
</script>

<Slide>
  <SlideTitle n={5}>What is encapsulation, and what does @property do?</SlideTitle>
  <Columns cols="1fr 1.3fr">
    <Stack>
      <Definition>
        <p><strong>Encapsulation</strong>: an object keeps its data behind its own methods, so outside code can't put it in a broken state. <code>_name</code> means "internal".</p>
        <p><code>@property</code> turns a method into something you use like an attribute, and lets you check values on write.</p>
      </Definition>
      <UseCase>
        A bank account whose balance can be read but never set to a negative number directly.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="property.py" />
      <Output
        title="python"
        text={'>>> t = Temperature(25); t.celsius = 30; t.celsius\n30\n>>> t.celsius = -300\nValueError: too cold'}
      />
    </Stack>
  </Columns>
</Slide>
