import * as request from "./axios";

export const search = async (q, maxResults = 40) => {
  try {
    const res = await request.get("volumes", {
      params: {
        q,
        maxResults,
        filter: "paid-ebooks",
      },
    });
    return res.items;
  } catch (error) {
    console.log(error);
  }
};
