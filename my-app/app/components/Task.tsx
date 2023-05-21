"use client";

import { ITask } from "../../types/tasks";
import Modal from "./Modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState, FormEventHandler } from "react";
import { editTodo, deleteTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task, t }) => {
  const router = useRouter();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenEditModal(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenDeleteModal(false);
    router.refresh();
  };

  return (
    <tr key={`task-${task.id}`}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenEditModal(true)}
          cursor="pointer"
          className="text-blue-500"
          size={20}
        />
        <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg"> {t("common.editTask")} </h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="..."
                className="input input-bordered w-full "
              />
              <button className="btn" type="submit">
                {t("common.submit")}
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenDeleteModal(true)}
          cursor="pointer"
          className="text-red-500"
          size={20}
        />
        <Modal modalOpen={openDeleteModal} setModalOpen={setOpenDeleteModal}>
          <h3 className="text-lg">{t("common.confirmationMessage")}</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              {t("common.yes")}
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
