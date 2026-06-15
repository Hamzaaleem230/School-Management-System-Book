# Conceptual Data Model: School Management System Case Study

**Feature Branch**: `001-sms-case-study` | **Date**: 2026-06-15 | **Spec**: [specs/001-sms-case-study/spec.md](specs/001-sms-case-study/spec.md)

## Overview

This document outlines the conceptual data model for the School Management System case study. It focuses on the key entities, their primary attributes, relationships, and conceptual lifecycle states, as defined in the feature specification and subsequent clarifications. All entities are conceptually identified by human-readable unique codes.

## Key Entities

### Student
-   **Description**: Represents a student within the system.
-   **Primary Identifier**: Unique human-readable Student ID (e.g., 'STU-001').
-   **Lifecycle**: Enrolled → Active → Graduated/Withdrawn.
-   **Key Attributes (conceptual)**:
    -   Student ID (unique)
    -   Name
    -   Date of Birth
    -   Contact Information
    -   Enrollment Date
    -   Current Status (based on lifecycle)
-   **Relationships**: Linked to Academic Records, Attendance, Financial Transactions, Parents, Courses.

### Teacher
-   **Description**: Represents an educator within the system.
-   **Primary Identifier**: Unique human-readable Teacher ID (e.g., 'TCH-001').
-   **Key Attributes (conceptual)**:
    -   Teacher ID (unique)
    -   Name
    -   Contact Information
    -   Subjects Taught
    -   Department
-   **Relationships**: Linked to Courses, Attendance, Salary Management.

### Parent
-   **Description**: Represents a parent/guardian of a student.
-   **Primary Identifier**: Unique human-readable Parent ID (e.g., 'PAR-001').
-   **Key Attributes (conceptual)**:
    -   Parent ID (unique)
    -   Name
    -   Contact Information
-   **Relationships**: Linked to Student(s).

### Admin
-   **Description**: Represents administrative staff with system-wide access and management capabilities.
-   **Primary Identifier**: Unique human-readable Admin ID (e.g., 'ADM-001').
-   **Key Attributes (conceptual)**:
    -   Admin ID (unique)
    -   Name
    -   Role
-   **Relationships**: Manages various modules and entities.

### Module
-   **Description**: A distinct, independently testable conceptual component of the SMS, encapsulating specific functionalities.
-   **Primary Identifier**: Unique Module ID (e.g., 'MOD-SM').
-   **Key Attributes (conceptual)**:
    -   Module ID (unique)
    -   Title
    -   Purpose/Goal
-   **Relationships**: Interacts with other Modules.

### Course
-   **Description**: A defined academic offering.
-   **Primary Identifier**: Unique human-readable Course Code (e.g., 'CSE-101').
-   **Key Attributes (conceptual)**:
    -   Course Code (unique)
    -   Title
    -   Description
    -   Credits
    -   Department
-   **Relationships**: Linked to Teachers, Students, Academic Records, Examinations.

### Examination
-   **Description**: A record of an assessment.
-   **Primary Identifier**: Unique human-readable Exam ID (e.g., 'EXM-FA23-CSE101').
-   **Key Attributes (conceptual)**:
    -   Exam ID (unique)
    -   Title
    -   Date
    -   Max Marks
-   **Relationships**: Linked to Courses, Students, Results.

### Financial Transaction
-   **Description**: A record of fees, payments, salaries, or expenses.
-   **Primary Identifier**: Unique human-readable Transaction ID (e.g., 'TRN-20230101-001').
-   **Key Attributes (conceptual)**:
    -   Transaction ID (unique)
    -   Type (Fee, Salary, Expense)
    -   Amount
    -   Date
-   **Relationships**: Linked to Students, Teachers (for salaries), Parents (for fees).

### Event
-   **Description**: A scheduled school activity.
-   **Primary Identifier**: Unique human-readable Event ID (e.g., 'EVT-SPORTSDAY-2024').
-   **Key Attributes (conceptual)**:
    -   Event ID (unique)
    -   Title
    -   Date
    -   Location
-   **Relationships**: Linked to Participants, Communication.

### Book/Resource
-   **Description**: An item in the library system.
-   **Primary Identifier**: Unique human-readable Book ID / ISBN (e.g., 'ISBN-1234567890').
-   **Key Attributes (conceptual)**:
    -   Book ID / ISBN (unique)
    -   Title
    -   Author
    -   Availability Status
-   **Relationships**: Linked to Borrowers (Students/Teachers).

### Vehicle/Route
-   **Description**: Components of the transport management system.
-   **Primary Identifier**: Unique human-readable Vehicle ID (e.g., 'BUS-005'), Route Code (e.g., 'RTE-NORTH').
-   **Key Attributes (conceptual)**:
    -   Vehicle ID (unique)
    -   Route Code (unique)
    -   Driver
    -   Capacity
-   **Relationships**: Linked to Students, Pickup/Drop Notifications.

### Notification
-   **Description**: A message dispatched to users via various channels.
-   **Primary Identifier**: Unique human-readable Notification ID (e.g., 'NOT-URGENT-001').
-   **Key Attributes (conceptual)**:
    -   Notification ID (unique)
    -   Type (SMS, Email, WhatsApp)
    -   Content
    -   Recipient
    -   Timestamp
-   **Relationships**: Linked to Events, Examinations, Announcements.

## Conceptual Relationships

-   One Student can have multiple Academic Records.
-   One Student can have multiple Attendance entries.
-   One Student can have multiple Financial Transactions (fees).
-   One Parent can be linked to multiple Students.
-   One Teacher can teach multiple Courses.
-   One Course can have multiple Students and Teachers.
-   One Examination is linked to one Course and multiple Students.
-   Financial Transactions link to Students and Teachers.
-   Events can trigger multiple Notifications.
-   Book/Resources are borrowed by Students/Teachers.
-   Vehicles are assigned to Routes, and Students are assigned to Routes.
