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
  import ex from "../examples/q02_arguments.py?raw";
</script>

<Slide>
  <SlideTitle n={2}
    >What are default arguments, keyword arguments, *args and **kwargs?</SlideTitle
  >
  <Columns cols="1fr 1.25fr">
    <Stack>
      <Definition>
        <ul>
          <li>
            <strong>Default Arguments</strong>: fallback value if it is not
            specified (<code>qty=1</code>).
          </li>
          <li>
            <strong>Keyword Arguments</strong>: specifying the name of the
            parameter (<code>item="tea"</code>)
          </li>
          <li>
            <code>*args</code>: collects extra positional arguments into a
            tuple.
          </li>
          <li>
            <code>**kwargs</code>: collects extra keyword arguments into a dict.
          </li>
        </ul>
      </Definition>
      <UseCase>
        A function with lots of optional settings, like <code
          >print(..., sep=", ", end="")</code
        >, or a wrapper that forwards whatever it receives.
      </UseCase>
    </Stack>
    <Stack>
      <Code src={ex} file="arguments.py" />
      <Output
        text={"coffee 1 () {}\ncoffee 2 ('sugar', 'milk') {}\ntea 1 () {'size': 'L', 'hot': True}\nwater 3 () {}"}
      />
    </Stack>
  </Columns>
</Slide>
