import { IComment } from "@/features/board/types";
import { faker } from "@faker-js/faker";

export default () => {
  const total = Math.floor(Math.random() * 10);

  const comments: Array<IComment> = [];

  for (let i = 0; i < total; i++) {
    const newComment: IComment = {
      author: faker.internet.userName(),
      time: new Date(Date.now() - Math.floor(Math.random() * 31536000000)),
      message: faker.lorem.paragraph(),
    };

    comments.push(newComment);
  }

  return comments;
};
