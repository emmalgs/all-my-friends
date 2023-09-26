import { InviteApi } from "../../services/inviteApi";
import sampleData  from "../../components/data/inviteCandidates";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe("inviteApi", () => {
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

  it('should return a message with the number of email invites sent', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      message: "Invites sent to 2 emails"
    }));
    const api = new InviteApi("", "");
    const emails = [
      "greg@greg.com", 
      "grog@grog.com",
    ];
    const response = await api.sendInvites(emails);
    expect(response.message).toEqual("Invites sent to 2 emails");
  });
});
