"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState, FormEventHandler, useEffect } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const AddTask = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        {t("common.addTask")} <AiOutlinePlus className="ml-2" size={10} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg"> {t("common.addTask")} </h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
