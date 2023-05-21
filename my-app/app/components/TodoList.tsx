"use client";
import { ITask } from "../../types/tasks";
import Task from "../components/Task";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const lng = navigator.language;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th> {t("common.tasks")} </th>
            <th> {t("common.actions")} </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={`task-${task.id}`} task={task} t={t} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
