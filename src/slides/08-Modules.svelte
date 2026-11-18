<script lang="ts">
  import { Slide, SlideTitle, Columns, Stack, Definition, UseCase, Code, Output } from '$lib';
  import ex from '../examples/q08_geometry.py?raw';
</script>

<Slide>
  <SlideTitle n={8}>What are modules and packages, and what does if __name__ == "__main__": do?</SlideTitle>
  <Columns cols="1fr 1.25fr">
    <Stack>
      <Definition>
        <ul>
          <li><strong>Module</strong>: one <code>.py</code> file you can <code>import</code>.</li>
          <li><strong>Package</strong>: a folder of modules (often with <code>__init__.py</code>).</li>
          <li><code>__name__</code> is <code>"__main__"</code> only when the file is run directly, so that block is skipped on import.</li>
        </ul>
      </Definition>
      <UseCase>
        Splitting a project into <code>models.py</code>, <code>storage.py</code>, … and keeping a quick self-test or CLI at the bottom of a module.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="geometry.py" mark={[7, 8]} />
      <Output title="terminal" text={'$ python geometry.py\n12.57\n$ python -c "import geometry"\n(nothing printed)'} />
    </Stack>
  </Columns>
</Slide>
