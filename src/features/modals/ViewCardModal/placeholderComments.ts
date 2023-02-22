import { IComment } from "@/features/board/types";


export default () => {
    const total = Math.floor(Math.random() * 10);

    const comments: Array<IComment> = []


    for (let i = 0; i < total; i++) {
        
        const newComment: IComment =  {
            author: "Callum Macpherson",
            time: new Date(Date.now() - Math.floor(Math.random() * 31536000000)),
            message: "Blah blah something",
          }

          comments.push(newComment)
        
    }

    return comments
}

  