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
  import ex from "../examples/q07_dataclass.py?raw";
</script>

<Slide>
  <SlideTitle n={7}>What is a dataclass?</SlideTitle>
  <Columns cols="1fr 1.2fr">
    <Stack>
      <Definition>
        <p>
          A class made with <code>@dataclass</code> decorator, made to store data.
          Automatically deals with dunders.
        </p>
      </Definition>
      <UseCase>Just data without behaviours</UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="dataclass.py" />
      <Output text={"Student(name='Anna', classes=['183', '227'])\nTrue"} />
    </Stack>
  </Columns>
</Slide>
