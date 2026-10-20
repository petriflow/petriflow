# Petriflow language

Petriflow is a process-driven language for describing executable, object-centric applications. A process definition brings together the data an object stores, the workflow that governs its lifecycle, the tasks through which people or systems act, and the permissions and forms associated with those tasks.

The language combines XML model structure with Groovy actions. A compatible Petriflow engine interprets the model and creates running process instances, called **cases**. The workflow is not just a diagram of a process: its Petri-net marking determines which tasks are available as a case changes over time.

## The process-centric object model

A **process** is a reusable definition, conceptually similar to a class. A **case** is one running instance of that definition, conceptually similar to an object. Each case has its own workflow marking, data values, and tasks. These comparisons explain the modeling style; they do not imply that Petriflow has general-purpose object-oriented inheritance.

A process model integrates four concerns:

- **Data** — typed variables describe the information held by each case.
- **Workflow** — places, transitions, and arcs describe lifecycle state and control flow.
- **Tasks and forms** — transitions can expose task forms that present selected data fields to a user.
- **Events, actions, and permissions** — events describe interactions and state changes; actions react to events, while roles govern who may perform them.

Process definitions are represented as XML documents. The current [XML Schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd) specifies the document structure; the [Objects reference](/objects) and [examples](/examples) provide additional structural and illustrative detail.

## Explore the language

- [Workflow](workflow) — Petri-net control flow, arc types, and task lifecycle.
- [Data and forms](data-and-forms) — case variables, task data references, and form behavior.
- [Events and permissions](events-and-permissions) — event-triggered actions and role-based access.
- [Coordination and queries](coordination-and-queries) — case relationships, cross-case coordination, and PFQL.
- [Research and extensions](research-and-extensions) — topics described as proposals or ongoing research, not as settled core syntax.

## Reading the research

This guide synthesizes papers in the `publications` section of the source repository. The papers vary in scope and maturity: some describe the language and platform, while others are interim reports or proposals. Where a topic is not part of the current schema, it is identified as research rather than presented as a supported language feature. For exact XML syntax, use the current [schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd) as the authority.

Related papers: [Petriflow and object-centric processes](/publications/platform-for-object-centric-processes-2025), [formal process definition](/publications/object-centric-processes-definition-10_2025), and [low-code requirements](/publications/low-code-requirements-10_2025).
