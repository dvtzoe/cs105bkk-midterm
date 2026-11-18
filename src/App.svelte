<!--
  The deck. Slide order = the order below. Add, remove or reorder freely.
-->
<script lang="ts">
  import { Deck } from "$lib";
  import Title from "./slides/00-Title.svelte";
  import Names from "./slides/01-Names.svelte";
  import Arguments from "./slides/02-Arguments.svelte";
  import ClassObject from "./slides/03-ClassObject.svelte";
  import Dunder from "./slides/04-Dunder.svelte";
  import Property from "./slides/05-Property.svelte";
  import InheritCompose from "./slides/06-InheritCompose.svelte";
  import Dataclass from "./slides/07-Dataclass.svelte";
  import Modules from "./slides/08-Modules.svelte";
  import Exceptions from "./slides/09-Exceptions.svelte";
  import Files from "./slides/10-Files.svelte";
  import Closing from "./slides/11-Closing.svelte";
</script>

<Deck>
  <!-- <Title /> -->
  <Names />
  <Arguments />
  <ClassObject />
  <Dunder />
  <Property />
  <InheritCompose />
  <Dataclass />
  <Modules />
  <Exceptions />
  <Files />
  <!-- <Closing /> -->
</Deck>
