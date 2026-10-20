# Workflow

Petriflow uses a place/transition Petri net to describe a process's control flow. **Places** represent workflow conditions or states and hold tokens; **transitions** represent activities. A transition is enabled when its incoming arc conditions are satisfied by the current marking. When workflow events change the marking, different tasks may become available.

Unlike an atomic Petri-net firing, a Petriflow **task** separates starting work from completing it. In the usual task lifecycle:

1. **Assign** starts an enabled task, assigns it to a user, and consumes the required input tokens.
2. The task is performed. Its form may allow the assigned user to read or update data.
3. **Finish** completes the task and produces tokens on its output arcs, advancing the workflow.

An assigned task may also be **cancelled**. Cancellation removes the assignment and returns the tokens consumed when the task was assigned. It does not by itself guarantee that changes made to case data during the task are rolled back.

## Arc types

The current schema defines these arc types:

| Arc | Effect |
| --- | --- |
| Regular | Requires the specified number of tokens and consumes them when the task is assigned; output arcs produce tokens when it finishes. |
| Read | Tests that enough tokens are present without consuming them. |
| Inhibitor | Is enabled when the source place has fewer tokens than the specified threshold. |
| Reset | Consumes all tokens from its source place when the task is assigned. |
| Variable | Uses a referenced value for its weight; the model can refer to data or place markings, subject to the engine's semantics. |

The schema represents places, transitions, and their connections as `place`, `transition`, and `arc` elements in the process document. See the [Objects reference](/objects#arc) and [schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd) for the XML structure.

## Modeling implications

Places make process state explicit, while tokens allow a model to express parallel paths and synchronization. Read, inhibitor, and reset arcs add conditions beyond ordinary token consumption and production. Because task availability follows the current marking, workflow state also determines which task forms can be acted on.

These semantics are described in the papers on the [formal process definition](/publications/object-centric-processes-definition-10_2025) and [Petriflow platform and language](/publications/platform-for-object-centric-processes-2025). For practical modeling, see [Places, Transitions & Arcs](/guides/plases_transitions_arcs).
