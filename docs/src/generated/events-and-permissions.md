# Events and permissions

Petriflow represents interactions with a process as events. Events can be triggered by a user, by the runtime, or by an action. An event may change workflow state, data, or both; actions attached to events define reactions to those changes.

## Event families

- **Process and case events** relate to process definitions and their instances, such as creating or viewing a case.
- **Task events** relate to a transition's task lifecycle, including assignment, cancellation, completion, and viewing. Enable and disable events can report changes in task availability.
- **Data events** occur when a variable is read or changed. Task-level data access also has context: a field may be accessible only through a particular task.

The available event declarations and their XML placement are defined by the [schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd). Event terminology and supported operations can vary by context; see the [Events guide](/guides/events-basic) and [Actions API](/actions/) for the documented runtime interfaces.

## Actions and phases

Actions are code snippets, written using Petriflow's Groovy-based action language, that react to events. An action may inspect or change data, query process resources, or trigger further events. This lets a model express behavior that follows a user interaction or a system state change.

Where an event supports phases, a **pre-phase** action runs before the event's state change and a **post-phase** action runs after it. The context available to an action depends on the event and phase. Actions can cause follow-on events, so chains of reactions should be designed deliberately.

## Roles and access control

Roles are associated with events through role references and permissions. This lets a process specify which users may view, assign, cancel, finish, or otherwise act on a task, according to the permissions supported for that event. The papers describe roles as applying to both human users and automated actors; the runtime remains responsible for enforcing permissions.

See [Roles - basic](/guides/roles-basic), [RoleRefs and Permissions management](/guides/roleRefs_permisionsMmanagement), and [Actions - basic](/guides/actions-basic) for hands-on examples.

Further reading: [low-code requirements](/publications/low-code-requirements-10_2025) and [formal process definition](/publications/object-centric-processes-definition-10_2025).
