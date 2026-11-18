<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q07_dataclass.py?raw';
</script>

<Slide>
  <SlideTitle n={7}>What is a dataclass?</SlideTitle>
  <Columns cols="1fr 1.2fr">
    <Stack>
      <Definition>
        <p>A class decorated with <code>@dataclass</code>: you list the fields with type hints, and Python writes <code>__init__</code>, <code>__repr__</code> and <code>__eq__</code> for you.</p>
        <p>Use <code>field(default_factory=list)</code> for mutable defaults.</p>
      </Definition>
      <UseCase>
        Plain records with little behaviour: a row from a CSV, a config object, a message received from an API.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="dataclass.py" />
      <Output text={"Student(name='Ana', grades=[90, 85])\nTrue"} />
    </Stack>
  </Columns>
</Slide>
