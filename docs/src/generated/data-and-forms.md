# Data and forms

## Case data

A process definition declares typed data variables. When the process is instantiated, each case has its own values for those variables, alongside its own workflow marking. Variables can hold business information, influence dynamic behavior, or refer to other process instances and tasks.

The schema includes types such as `text`, `number`, `boolean`, `date`, `dateTime`, `enumeration`, `file`, `user`, `caseRef`, and `taskRef`, among others. Variables may also define titles, descriptions, initial values, options, validations, components, and event actions. The precise allowed XML elements depend on the variable type and are defined in the [current schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd).

## Task forms and data references

A transition can refer to process variables through **data references**. These references bind case data to a task form and specify how each field behaves in that task—for example, whether it is visible, editable, or required. The same variable can be referenced from multiple tasks with different behavior, so the form is a task-specific view of case data rather than a separate copy of that data.

At runtime, the task's state, the assigned user, permissions, and field behavior determine which data can be read or changed. Required fields and validations can constrain task completion. Forms can therefore present different interactions with the same case data at different points in its lifecycle.

## References between cases and tasks

Reference types such as `caseRef` and `taskRef` let a process model hold links to other cases or tasks. These links can support navigation, cross-case actions, and embedding another task's form in a parent task, depending on the engine and model configuration. A reference is not the same thing as inheritance: it links to another runtime object rather than deriving a new process definition from it.

See the [Data - basic guide](/guides/data-basic), [Objects reference](/objects), and [process-platform paper](/publications/platform-for-object-centric-processes-2025) for more context.
