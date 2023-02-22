import { IBoard } from "@/features/board/types";
import CreateBoardModal from "@/features/modals/CreateBoardModal";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from 'next/router';

const placeholderBoards: Array<IBoard> = [
  {
    id: "1",
    name: "Board 1",
    description: "First board",
  },
  {
    id: "2",
    name: "Board 2",
    description: "Second board",
  },

];

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [boards, setBoards] = useState<Array<IBoard>>(placeholderBoards)

  const router = useRouter();

  const handleShowModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleAddBoard = (newBoard: IBoard) => {
    setBoards(x => ([ ...x, newBoard ]))
    router.replace(`/boards/${newBoard.id}`)
  }

    return (
<main>
        <div className="container mx-auto mt-6 p-2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h1 className="text-4xl">Boards</h1>
            <button className="bg-gray-600 text-white py-2 px-4 rounded-sm mt-2 md:mt-0" onClick={handleShowModal}>Create board</button>
          </div>

          <hr className="h-1 mt-2 mx-auto border-0 rounded bg-gray-600"></hr>

          <ul className="grid gap-2 mt-2 md:grid-cols-2 lg:grid-cols-3">
            {boards.map(({ name, id, description }, index) => (
              <li key={index}>
                <Link href={`/boards/${id}`}>
                  <div className="bg-gray-200 hover:bg-gray-300 rounded-sm p-2 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xl">{name}</div>
                      <div>{description}</div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <CreateBoardModal 
          handleClose={handleCloseModal} 
          modalVisible={modalVisible} 
          handleAddBoard={handleAddBoard}
        />
      </main>
    )
}

export default Dashboard