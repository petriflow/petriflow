# Research and extensions

The publications include topics that are proposals, interim research, or platform-specific capabilities rather than established constructs in the current Petriflow XML schema. This page records that distinction to avoid implying that every research direction is already part of the language.

## Process inheritance

The inheritance report reviews Petri-net lifecycle inheritance—protocol, projection, and combined forms—and discusses ways to share data or task structures between processes. It also states that full lifecycle inheritance is not currently implemented in Petriflow; the examples describe partial techniques based on references and duplicated structures.

The current process schema defines a process document and its contents, but does not define a general parent-process or inheritance declaration. Therefore, inheritance should be treated as a research topic, not as a supported language feature. See the [inheritance report](/publications/petriflow-inheritance-2026).

## SQL-to-Petriflow preprocessing

The SQL preprocessing report outlines a proposed extension that would translate a subset of SQL statements into Petriflow process XML. It discusses a preprocessor service, supported SQL operations, and optional metadata for selecting a preprocessor. The report is a requirements and design document; it does not establish SQL statements as native Petriflow syntax.

The current schema does not define the preprocessor-selection metadata described in that proposal. Treat SQL-to-Petriflow translation as an extension concept, not as built-in language behavior. See the [SQL preprocessing report](/publications/sql-to-petriflow-2026).

## PFQL directions

The PFQL report describes state-based searches implemented in the Netgrif Platform. It identifies process-model queries and execution-history or temporal queries as possible future extensions. Those directions should not be confused with the current query capabilities described in the report. See [Coordination and queries](coordination-and-queries) and the [PFQL report](/publications/petriflow-query-language-2026).

## Source and status

This guide is explanatory, not a replacement for the schema or runtime documentation. The [current schema](https://github.com/petriflow/petriflow/blob/main/petriflow.schema.xsd) is the source of truth for XML syntax. Publication status and terminology reflect the linked papers; platform-specific behavior should be checked against the relevant runtime documentation.
