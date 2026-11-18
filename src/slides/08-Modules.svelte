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
  import ex from "../examples/q08_geometry.py?raw";
</script>

<Slide>
  <SlideTitle n={8}
    >What are modules and packages, and what does if __name__ == "__main__": do?</SlideTitle
  >
  <Columns cols="1fr 1.25fr">
    <Stack>
      <Definition>
        <ul>
          <li>
            <strong>Module</strong> is a <code>.py</code>
            <code>import</code>ed.
          </li>
          <li>
            <strong>Package</strong>: a directory of modules with
            <code>__init__.py</code>.
          </li>
          <li>
            <code>__name__</code> is <code>"__main__"</code> when the file is run
            directly, so that block is skipped on import.
          </li>
        </ul>
      </Definition>
      <UseCase>
        Splitting a project into multiple files with multiple possible entry
        points
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="geometry.py" />
      <Output
        title="terminal"
        text={'$ python geometry.py\n12.57\n$ python -c "import geometry"\n*nothing*'}
      />
    </Stack>
  </Columns>
</Slide>
