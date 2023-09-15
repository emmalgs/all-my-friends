import { candidates } from "./mockData";

const getData = () => {
  return candidates;
}

const postData = (emails) => {
  return { message: `Invites have been sent to ${emails.length} friends.` };
}

export { getData, postData };