# Coordination and queries

Petriflow applications commonly contain multiple process definitions and many cases of each definition. A case can store references to other cases or tasks, creating relationships between independently progressing process instances. Actions can use those references to coordinate work—for example, finding related cases, presenting their tasks as part of a parent task, or triggering an event in a related case.

The research describes both synchronous transition coordination and event-driven cross-case interaction. The exact behavior depends on the operation and runtime: a synchronized task may require the target task to be enabled and authorized, while a notification-style interaction may be asynchronous. Treat these as runtime coordination patterns, not as implicit behavior of every reference field.

## Petriflow Query Language (PFQL)

The PFQL paper describes a database-agnostic query syntax implemented in the Netgrif Platform. It is intended to search current process resources without requiring the author to write directly against the platform's underlying storage formats. The report covers searches over processes, cases, tasks, users, and roles, with `search`, `count`, and `exists` statements, predicates, paging, and sorting.

Example query from the paper's syntax:

```text
search cases : processIdentifier == 'request_query'
  and data.name == 'John'
  and data.surname == 'Doe'
  page 0 size 20
```

The paper focuses on current resource state and workflow markings. It presents historical and temporal querying as future work, so this guide does not describe PFQL as a process-history or model-checking language. PFQL is a platform query facility; it is distinct from the XML structure defined by the process schema.

## Example coordination pattern

The platform paper's order-and-invoice example illustrates the general pattern:

1. A parent case stores or discovers related child cases.
2. An action queries for child cases or their tasks that match current criteria.
3. The parent task presents the relevant child task forms or triggers actions on the children.
4. The resulting events advance each process according to its own workflow.

This keeps each object's lifecycle in its own process definition while allowing application-level coordination. It also means permissions and task enabledness must be considered when actions interact across cases.

Further reading: [PFQL report](/publications/petriflow-query-language-2026), [inter-process communication report](/publications/inter-process-communication-2025), and [platform paper](/publications/platform-for-object-centric-processes-2025).
