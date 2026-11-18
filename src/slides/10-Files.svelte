<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q10_files.py?raw';
</script>

<Slide>
  <SlideTitle n={10}>How do you read and write files, CSV and JSON in Python?</SlideTitle>
  <Columns cols="1fr 1.45fr">
    <Stack>
      <Definition>
        <ul>
          <li><code>open(path, mode)</code> inside <code>with</code>, so the file is always closed. Modes: <code>"r"</code>, <code>"w"</code>, <code>"a"</code>.</li>
          <li><code>csv</code>: rows of a table (<code>writer</code>, <code>DictReader</code>).</li>
          <li><code>json</code>: dicts and lists (<code>dump</code>, <code>load</code>).</li>
        </ul>
      </Definition>
      <UseCase>
        Saving a game or app state to JSON, and importing a spreadsheet export (CSV) to compute grades.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="files.py" />
      <Output text={"[{'name': 'Ana', 'score': '90'}]"} />
    </Stack>
  </Columns>
</Slide>
