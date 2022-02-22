URL = "http://localhost:5000/api/tasks";

export const getTasks = () => {
  return fetch(URL, {
    method: "GET",
  });
};

export const createTasks = (data) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
