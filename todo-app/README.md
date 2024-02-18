# Todo App

## To Visit Click [Here](https://rejoy01mytodoapp.pages.dev/)

This is a simple todo application built with React.

## Features

- **Task Addition**: Implemented a form to add new tasks to the list. Each task has a title and a flag indicating whether it's completed. New tasks are added to the top of the list.

- **Task Display & Management**: All tasks are displayed in a list format. A button or checkbox is provided to toggle the completed status of each task. Users can also delete tasks from the list.

- **Filtering**: Implemented filtering options to allow users to view all tasks, only completed tasks, or only incomplete tasks.

- **Persistence**: The task list is saved to the local storage and retrieved on application load, ensuring persistence between page reloads.

- **Styling**: Basic styling is applied to the application to improve its appearance.

## Instructions

### Setup

1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: cd todo-app
3. Install dependencies: npm install

### Running the Application

1. Start the development server:
    npm start
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

3. Alternatively, you can access the deployed version of the application [here]([<deployed_link>](https://rejoy01mytodoapp.pages.dev/)).

### Usage

- To add a new task, fill out the form at the top of the page and click the "Add" button.
- To mark a task as completed, click the checkbox or button associated with the task.
- To delete a task, click the delete button next to the task.
- Use the filtering options to view all tasks, completed tasks, or incomplete tasks.

## Design Decisions

- **Task Addition**: Implemented a simple form for adding tasks to keep the user interface clean and intuitive.
- **Task Display & Management**: Tasks are displayed in a straightforward list format with clear options for completing and deleting tasks.
- **Filtering**: Filtering options are provided to enhance user experience by allowing users to focus on specific subsets of tasks.
- **Persistence**: Utilized local storage for storing task data to provide a seamless experience for users even after page reloads.
- **Styling**: Basic CSS styling is applied to improve the visual appearance of the application while keeping it lightweight.
