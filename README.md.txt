# React + Django + SQL To-Do App

A modern, full-stack To-Do list application built with **React** for an interactive frontend, **Django** with **Django REST Framework** for the backend, and **SQL** (SQLite) for persistent data storage. Features a spacious task list for longer descriptions and a visual stack indicator to track progress.

![Desktop View](screenshots/desktop.png)

## Features
- **Add Tasks**: Create tasks with a wide input field supporting longer descriptions (up to 200 characters).
- **Toggle Completion**: Click tasks to mark as completed (strikethrough + gray stack rectangle).
- **Delete Tasks**: Remove tasks with a single click.
- **Progress Stack**: Left sidebar shows blue rectangles for pending tasks, gray for completed.
- **Responsive Design**: Optimized for desktop and mobile with smooth animations and a wide task list.
- **API-Driven**: Real-time task syncing via RESTful API.

## Tech Stack
- **Frontend**: React (with Axios), CSS (custom variables, gradients, hover effects).
- **Backend**: Django, Django REST Framework, SQLite (dev; supports PostgreSQL).
- **Database**: SQL with `Task` model (`id`, `title`, `completed`, `created_at`).
- **Tools**: Git, npm, pip.

## Installation
### Prerequisites
- Python 3.8+ (for Django)
- Node.js 18+ (for React)
- Git

### Backend (Django + SQL)
1. Clone the repo:
   ```bash
   git clone https://github.com/Ruth991268/To-Do-App-React-Django-Sql.git
   cd To-Do-App-React-Django-Sql/backend