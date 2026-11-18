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
  import ex from "../examples/q01_aliasing.py?raw";
</script>

<Slide>
  <SlideTitle n={1}
    >What is the difference between a name and an object, and what is aliasing?</SlideTitle
  >
  <Columns cols="1fr 1.15fr">
    <Stack>
      <Definition>
        <p>
          An <strong>object</strong> is the actual value of each variables. A
          <strong>name</strong> is a word that refers to the object.
        </p>
        <p>
          <strong>Aliasing</strong> is when two names point to the same object, so
          changing it through one of them also changes the other.
        </p>
      </Definition>
      <UseCase>
        <ul>
          <li>
            <strong>object</strong> and <strong>name</strong> are used everywhere,
            like variables or similar.
          </li>
          <li>
            <strong>Aliasing</strong>, it is useful when you want call a
            function that will modify value of something directly without
            manually assigning it. Or passing around big objects expensive in
            memory so there won't be multiple copies.
          </li>
        </ul>
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="aliasing.py" />
      <Output text={"[1, 2, 3, 4]\nTrue\nTrue False"} />
    </Stack>
  </Columns>
</Slide>
