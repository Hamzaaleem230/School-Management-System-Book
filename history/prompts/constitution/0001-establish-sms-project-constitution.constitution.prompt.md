---
id: 0001
title: Establish SMS project constitution
stage: constitution
date: 2026-06-15
surface: agent
model: gemini-cli-agent
feature: none
branch: main
user: CLI User
command: /sp.constitution

labels: ["documentation","constitution","project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  null
---

## Prompt

```text
/sp.constitution

Project: School Management System (SMS)

Purpose:
This project aims to design a comprehensive, modular, and scalable School Management System that digitizes and automates academic, administrative, financial, and communication workflows of a modern educational institution. The system is structured as clearly defined modules, each responsible for a specific operational domain, ensuring clarity, maintainability, and real-world applicability.

Core principles:
- Accuracy: Saari functional requirements, workflows, aur business logic real-world school processes aur standard academic administration practices se aligned honge.
- Clarity: Documentation aur explanations aisi hongi jo computer science / IT background ke students asani se samajh saken.
- Modularity: Har module independent hoga, lekin overall system ke sath seamlessly integrated rahega.
- Scalability: System design aisa hoga ke future features (AI, analytics, integrations) asani se add kiye ja saken.
- Consistency: Har module aik hi documentation structure, terminology, aur technical tone follow karega.
- Security & Privacy: Student, teacher, parent aur financial data ke liye proper access control aur data protection principles follow honge.

System architecture standards:
- Each module will be logically separated (Student, Teacher, Attendance, Finance, etc.).
- Clear role-based access control (Admin, Teacher, Student, Parent).
- Centralized database with normalized entities.
- Well-defined data flow between modules.
- Optional AI-driven intelligence layer for analytics and decision support.

Module definitions & scope:

Module 1 — Student Management System  
Focuses on complete lifecycle management of students.  
Includes student registration, profile management, academic records, examination results, attendance history, medical information, and performance analytics.  
This module acts as the core data source for academic and attendance-related systems.

Module 2 — Teacher Management System  
Manages teacher profiles, attendance, leaves, salaries, and performance evaluations.  
Ensures efficient human resource management and integrates with academic and attendance modules.

Module 3 — Attendance Management System  
Handles attendance for both students and teachers using multiple methods such as manual entry, QR codes, and face recognition.  
Provides reports, analytics, and parent notifications for transparency and accountability.

Module 4 — Academic Management System  
Covers subjects, classes, timetables, homework, assignments, learning materials, and course management.  
Acts as the academic backbone of the system.

Module 5 — Examination Management System  
Responsible for exam creation, online examinations, marks entry, grade calculation, result generation, publishing, and performance reporting.

Module 6 — Financial Management System  
Manages fee collection, salary processing, expenses, financial reports, digital receipts, and payment history with accuracy and auditability.

Module 7 — Parent Portal System  
Provides parents with access to student progress, attendance, fee status, examination results, and communication with teachers.

Module 8 — Communication Management System  
Centralized notification system for holidays, exams, events, emergencies, and alerts via SMS, WhatsApp, and email.

Module 9 — Event Management System  
Handles school events such as picnics, festivals, sports days, functions, registrations, scheduling, and certificate distribution.

Module 10 — Library Management System  
Manages physical and digital library operations including book inventory, issue/return, fines, digital resources, and reading history.

Module 11 — Transport Management System  
Controls school transport operations including bus tracking, route management, driver and vehicle management, notifications, and route optimization.

Module 12 — Security Management System  
Ensures campus security using QR-based student IDs, visitor management, entry/exit monitoring, emergency alerts, face recognition, and access control.

Module 13 — AI Autonomous Intelligence System  
Provides intelligent insights and automation through AI assistants, performance prediction, attendance analysis, fee monitoring, feedback analysis, timetable generation, reporting, and decision support.

Documentation standards:
- Each module will have:
  - Introduction
  - Objectives
  - Functional scope
  - Sub-module definitions
  - Data flow overview
  - Use-case scenarios
- Diagrams (ERD, flowcharts) will be conceptually accurate.
- Terminology will remain consistent across all modules.

Constraints:
- Format: Structured documentation / case study
- Language: Simple, formal, academic English
- Output: Suitable for academic submission and software engineering case study
- Plagiarism: 0% tolerance

Success criteria:
- Complete coverage of all modules and submodules
- Clear explanation of system structure and responsibilities
- Logical flow between modules
- Academically acceptable case study structure
- Easy to understand for evaluators and instructors
```

## Response snapshot

The project constitution has been successfully established.

**Summary of Changes:**
*   **New Version:** `0.1.0`
*   **Version Bump Rationale:** This is an initial MINOR version bump, as the constitution is being populated for the first time with significant foundational content including project principles, architecture standards, and module definitions.
*   **Files Flagged for Manual Follow-up:**
    *   `.specify/templates/plan-template.md`
    *   `.specify/templates/spec-template.md`
    *   `.specify/templates/tasks-template.md`
    *   `.specify/commands/*.toml`
    These templates require review to ensure their content aligns with the newly defined constitution.

**Suggested Commit Message:**
```
docs: establish constitution v0.1.0 with SMS project principles
```

## Outcome

- ✅ Impact: Constitution document created/updated.
- 🧪 Tests: N/A (no code changes, only documentation)
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Review templates for consistency.
- 🧠 Reflection: Successfully initialized the project constitution based on user input. Handled PHR creation using agent-native method due to shell script execution failure.

## Evaluation notes (flywheel)

- Failure modes observed: create-phr.sh script failed to execute via run_shell_command.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate run_shell_command's bash execution on Win32 environment for create-phr.sh.
