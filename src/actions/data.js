export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-3", "column-2", "column-1"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo column",
          cardOrder: ["card-1", "card-2", "card-3","card-4","card-5","card-6","card-7"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
              cover: 'https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337',
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 2",
              cover: null,
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 3",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 4",
              cover: null,
            },
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 5",
              cover: null,
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 6",
              cover: null,
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 7",
              cover: null,
            }
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "Inprogress column",
          cardOrder: ["card-8", "card-9", "card-10"],
          cards: [
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 8",
              cover: null,
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 9",
              cover: null,
            },
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 10",
              cover: null,
            }
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Column 3 Done Tasks",
          cardOrder: ["card-11", "card-12", "card-13"],
          cards: [
            {
              id: "card-13",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 11",
              cover: null,
            },
            {
              id: "card-12",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 12",
              cover: null,
            },
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 13",
              cover: null,
            }
          ],
        }


      ],
    },
  ],
};
