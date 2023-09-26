import { InviteApi } from "../../services/inviteApi";
import sampleData from "../../components/data/inviteCandidates";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("inviteApi.getCandidates", () => {
  it("should get a list of candidates", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(sampleData));
    const api = new InviteApi("", "");
    const candidates = await api.getCandidates();
    expect(candidates[0]).toEqual({
      firstName: "Mary",
      lastName: "Adams",
      email: "mary.adams@gmail.com",
    });
  });

  it("should return an error message if the auth code is invalid", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: "Invalid auth code",
      })
    );
    const api = new InviteApi("", "");
    const response = await api.getCandidates();
    expect(response.message).toEqual("Invalid auth code");
  });
});

describe("inviteApi.sendInvites", () => {
  it("should return a message with the number of email invites sent", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: "Invites sent to 2 emails",
      })
    );
    const api = new InviteApi("", "");
    const emails = ["greg@greg.com", "grog@grog.com"];
    const response = await api.sendInvites(emails);
    expect(response.message).toEqual("Invites sent to 2 emails");
  });
  it("should return an error message if the email format is invalid", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: "Invalid email format",
      })
    );
    const api = new InviteApi("", "");
    const emails = ["hank"];
    const response = await api.sendInvites(emails);
    expect(response.message).toEqual("Invalid email format");
  });
  it('should return a 400 bad request if the array is empty', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: "empty array",
      })
    );
    const api = new InviteApi("", "");
    const emails = [];
    const response = await api.sendInvites(emails);
    expect(response.message).toEqual("empty array");
  });
});
