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
  import ex from "../examples/q10_files.py?raw";
</script>

<Slide>
  <SlideTitle n={10}
    >How do you read and write files, CSV and JSON in Python?</SlideTitle
  >
  <Columns cols="1fr 1.45fr">
    <Stack>
      <Definition>
        <ul>
          <li>
            <code>open(path, mode)</code> inside <code>with</code>, so the file
            is automatically closed. With <code>"r"</code> (read),
            <code>"w"</code>
            (write),
            <code>"a"</code> (append) modes.
          </li>
          <li>
            <code>csv</code> for comma separated values.
          </li>
          <li>
            <code>json</code> for javascript object notations
          </li>
        </ul>
      </Definition>
      <UseCase>Saving persistent data which can be shared to others.</UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="files.py" />
      <Output text={"[{'name': 'Yuuka', 'data': '100'}]"} />
    </Stack>
  </Columns>
</Slide>
